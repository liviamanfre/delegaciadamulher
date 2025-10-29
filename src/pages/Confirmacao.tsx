import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Download, Home, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { gerarPDF, DenunciaData } from "@/utils/gerarPDF";
import EmergencyButton from "@/components/EmergencyButton";

const Confirmacao = () => {
  const navigate = useNavigate(); // Hook para navegação entre páginas
  const { id } = useParams(); // Obtém o ID da denúncia a partir da URL
  const [denuncia, setDenuncia] = useState<DenunciaData | null>(null); // Estado para armazenar os dados da denúncia

  // Efeito que carrega os dados da denúncia ao abrir a página
  useEffect(() => {
    if (id) {
      // Recupera todas as denúncias armazenadas no localStorage
      const denuncias = JSON.parse(localStorage.getItem("denuncias") || "[]");

      // Procura a denúncia correspondente ao ID da URL
      const denunciaEncontrada = denuncias.find((d: DenunciaData) => d.id === id);
      
      // Se encontrar, salva no estado. Caso contrário, redireciona para a página inicial
      if (denunciaEncontrada) {
        setDenuncia(denunciaEncontrada);
      } else {
        navigate("/");
      }
    }
  }, [id, navigate]);

  // Função para gerar e baixar o PDF da ocorrência
  const handleBaixarPDF = () => {
    if (denuncia) {
      gerarPDF(denuncia);
    }
  };

  // Caso a denúncia ainda não tenha sido carregada, não renderiza nada
  if (!denuncia) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-soft">
      {/* Cabeçalho do site */}
      <Header />
      
      {/* Conteúdo principal */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Cartão central de confirmação */}
          <Card className="p-8 md:p-12 shadow-card text-center space-y-6">
            
            {/* Ícone de confirmação */}
            <div className="flex justify-center">
              <div className="p-4 bg-primary/10 rounded-full">
                <CheckCircle className="h-16 w-16 text-primary" />
              </div>
            </div>

            {/* Título e mensagem de sucesso */}
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Ocorrência Registrada com Sucesso!
              </h2>
              <p className="text-muted-foreground">
                Sua denúncia foi registrada e está em análise
              </p>
            </div>

            {/* Bloco com número de protocolo */}
            <div className="bg-secondary/30 rounded-xl p-6 space-y-3">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <FileText className="h-4 w-4" />
                <span>Número do Protocolo</span>
              </div>
              <p className="text-3xl font-bold text-primary">
                #{denuncia.id}
              </p>
              <p className="text-sm text-muted-foreground">
                Guarde este número para acompanhar sua ocorrência
              </p>
            </div>

            {/* Botões de ação */}
            <div className="space-y-4 pt-4">
              {/* Botão para baixar o PDF */}
              <Button
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 shadow-lg text-white"
                onClick={handleBaixarPDF}
              >
                <Download className="mr-2 h-5 w-5" />
                Baixar PDF da Ocorrência
              </Button>

              {/* Botões secundários: histórico e voltar */}
              <div className="grid sm:grid-cols-2 gap-3">
                <Button
                  className="bg-mulher-700 hover:bg-mulher-800 text-white"
                  onClick={() => navigate("/historico")}
                >
                  Ver Histórico
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => navigate("/")}
                >
                  <Home className="mr-2 h-4 w-4" />
                  Voltar ao Início
                </Button>
              </div>
            </div>

            {/* Instruções e próximos passos */}
            <div className="pt-4 text-sm text-muted-foreground border-t border-border">
              <p className="font-medium mb-2">Próximos Passos:</p>
              <ul className="text-left space-y-1 list-disc list-inside">
                <li>Baixe o PDF e guarde em local seguro</li>
                <li>Procure uma delegacia para formalizar a denúncia</li>
                <li>Mantenha o número do protocolo para referência</li>
              </ul>
            </div>
          </Card>
        </div>
      </main>

      {/* Rodapé do site */}
      <Footer />
    </div>
  );
};

export default Confirmacao;
