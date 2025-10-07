import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Download, FileText, Calendar, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DenunciaData, gerarPDF } from "@/utils/gerarPDF";
import EmergencyButton from "@/components/EmergencyButton";

const Historico = () => {
  const navigate = useNavigate();
  const [denuncias, setDenuncias] = useState<DenunciaData[]>([]);
  const [filtro, setFiltro] = useState<string>("todas");

  useEffect(() => {
    const denunciasArmazenadas = JSON.parse(localStorage.getItem("denuncias") || "[]");
    setDenuncias(denunciasArmazenadas);
  }, []);

  const denunciasFiltradas = filtro === "todas" 
    ? denuncias 
    : denuncias.filter(d => d.tipoViolencia === filtro);

  const totalPorTipo = denuncias.reduce((acc, d) => {
    acc[d.tipoViolencia] = (acc[d.tipoViolencia] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const getVariantePorTipo = (tipo: string) => {
    const variants: Record<string, "default" | "destructive" | "secondary" | "outline"> = {
      "Física": "destructive",
      "Psicológica": "secondary",
      "Sexual": "destructive",
      "Patrimonial": "default",
      "Moral": "outline",
    };
    return variants[tipo] || "default";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-soft">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              className="text-primary hover:text-primary-dark"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Histórico de Ocorrências
            </h2>
            <p className="text-muted-foreground">
              Visualize e gerencie suas denúncias registradas
            </p>
          </div>

          {/* Estatísticas */}
          {denuncias.length > 0 && (
            <Card className="p-6 shadow-card bg-secondary/20">
              <h3 className="font-semibold text-foreground mb-4">Resumo Estatístico</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{denuncias.length}</p>
                  <p className="text-sm text-muted-foreground">Total</p>
                </div>
                {Object.entries(totalPorTipo).map(([tipo, count]) => (
                  <div key={tipo} className="text-center">
                    <p className="text-2xl font-bold text-primary">{count}</p>
                    <p className="text-sm text-muted-foreground">{tipo}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Filtro */}
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-foreground">Filtrar por tipo:</label>
            <Select value={filtro} onValueChange={setFiltro}>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas</SelectItem>
                <SelectItem value="Física">Física</SelectItem>
                <SelectItem value="Psicológica">Psicológica</SelectItem>
                <SelectItem value="Sexual">Sexual</SelectItem>
                <SelectItem value="Patrimonial">Patrimonial</SelectItem>
                <SelectItem value="Moral">Moral</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Lista de Denúncias */}
          {denunciasFiltradas.length === 0 ? (
            <Card className="p-12 shadow-card text-center">
              <div className="flex flex-col items-center gap-4 text-muted-foreground">
                <AlertTriangle className="h-12 w-12" />
                <div>
                  <p className="font-medium">Nenhuma ocorrência encontrada</p>
                  <p className="text-sm">
                    {filtro === "todas" 
                      ? "Você ainda não registrou nenhuma denúncia"
                      : `Nenhuma denúncia do tipo "${filtro}" encontrada`
                    }
                  </p>
                </div>
                {denuncias.length === 0 && (
                  <Button
                    className="mt-4 bg-gradient-primary hover:opacity-90 shadow-lg text-white"
                    onClick={() => navigate("/registrar")}
                  >
                    Registrar Primeira Ocorrência
                  </Button>
                )}
              </div>
            </Card>
          ) : (
            <div className="space-y-4">
              {denunciasFiltradas.map((denuncia) => (
                <Card key={denuncia.id} className="p-6 shadow-card hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge variant={getVariantePorTipo(denuncia.tipoViolencia)}>
                            {denuncia.tipoViolencia}
                          </Badge>
                          <Badge variant="outline" className="border-primary/40 text-primary">
                            {denuncia.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <FileText className="h-4 w-4" />
                          <span className="font-mono">Protocolo #{denuncia.id}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>
                            Registrado em: {new Date(denuncia.dataRegistro).toLocaleDateString("pt-BR")}
                          </span>
                        </div>
                      </div>
                      
                      <Button
                        size="sm"
                        className="bg-gradient-primary hover:opacity-90 shadow-lg text-white"
                        onClick={() => gerarPDF(denuncia)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Baixar PDF
                      </Button>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium text-foreground mb-1">Descrição:</p>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {denuncia.descricao}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Historico;
