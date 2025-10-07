import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowLeft, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { gerarPDF, DenunciaData } from "@/utils/gerarPDF";
import EmergencyButton from "@/components/EmergencyButton";

interface FormData {
  nome: string;
  cpf: string;
  endereco: string;
  telefone: string;
  tipoViolencia: string;
  descricao: string;
  dataOcorrido: string;
}

const RegistrarOcorrencia = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>();

  const tipoViolencia = watch("tipoViolencia");

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);

    // Gerar ID único
    const id = Date.now().toString();
    
    // Criar objeto da denúncia
    const denuncia: DenunciaData = {
      id,
      nome: data.nome,
      cpf: data.cpf,
      endereco: data.endereco,
      telefone: data.telefone,
      tipoViolencia: data.tipoViolencia,
      descricao: data.descricao,
      dataOcorrido: data.dataOcorrido,
      dataRegistro: new Date().toISOString(),
      status: "Em análise",
    };

    // Salvar no localStorage
    const denunciasExistentes = JSON.parse(localStorage.getItem("denuncias") || "[]");
    denunciasExistentes.push(denuncia);
    localStorage.setItem("denuncias", JSON.stringify(denunciasExistentes));

    // Gerar PDF
    gerarPDF(denuncia);

    // Feedback e redirecionamento
    toast.success("Ocorrência registrada com sucesso!");
    
    setTimeout(() => {
      navigate(`/confirmacao/${id}`);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-soft">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Button
            variant="ghost"
            className="mb-6 text-primary hover:text-primary-dark"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>

          <Card className="p-6 md:p-8 shadow-card">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Registro de Ocorrência
                </h2>
                <p className="text-muted-foreground">
                  Preencha os campos abaixo com o máximo de detalhes possível
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Dados da Vítima */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-primary/20 pb-2">
                    Dados da Vítima
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      {...register("nome", { required: true })}
                      placeholder="Digite seu nome completo"
                      className={errors.nome ? "border-destructive" : ""}
                    />
                    {errors.nome && (
                      <p className="text-sm text-destructive">Campo obrigatório</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cpf">CPF *</Label>
                      <Input
                        id="cpf"
                        {...register("cpf", { required: true })}
                        placeholder="000.000.000-00"
                        className={errors.cpf ? "border-destructive" : ""}
                      />
                      {errors.cpf && (
                        <p className="text-sm text-destructive">Campo obrigatório</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        {...register("telefone", { required: true })}
                        placeholder="(00) 00000-0000"
                        className={errors.telefone ? "border-destructive" : ""}
                      />
                      {errors.telefone && (
                        <p className="text-sm text-destructive">Campo obrigatório</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="endereco">Endereço *</Label>
                    <Input
                      id="endereco"
                      {...register("endereco", { required: true })}
                      placeholder="Rua, número, bairro, cidade"
                      className={errors.endereco ? "border-destructive" : ""}
                    />
                    {errors.endereco && (
                      <p className="text-sm text-destructive">Campo obrigatório</p>
                    )}
                  </div>
                </div>

                {/* Detalhes da Ocorrência */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-primary/20 pb-2">
                    Detalhes da Ocorrência
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="tipoViolencia">Tipo de Violência *</Label>
                    <Select
                      onValueChange={(value) => setValue("tipoViolencia", value)}
                      value={tipoViolencia}
                    >
                      <SelectTrigger className={!tipoViolencia ? "text-muted-foreground" : ""}>
                        <SelectValue placeholder="Selecione o tipo de violência" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Física">Física</SelectItem>
                        <SelectItem value="Psicológica">Psicológica</SelectItem>
                        <SelectItem value="Sexual">Sexual</SelectItem>
                        <SelectItem value="Patrimonial">Patrimonial</SelectItem>
                        <SelectItem value="Moral">Moral</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dataOcorrido">Data e Hora do Ocorrido *</Label>
                    <Input
                      id="dataOcorrido"
                      type="datetime-local"
                      {...register("dataOcorrido", { required: true })}
                      className={errors.dataOcorrido ? "border-destructive" : ""}
                    />
                    {errors.dataOcorrido && (
                      <p className="text-sm text-destructive">Campo obrigatório</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="descricao">Descrição Detalhada *</Label>
                    <Textarea
                      id="descricao"
                      {...register("descricao", { required: true })}
                      placeholder="Descreva com detalhes o que aconteceu. Quanto mais informações você fornecer, melhor será o registro."
                      className={`min-h-[150px] ${errors.descricao ? "border-destructive" : ""}`}
                    />
                    {errors.descricao && (
                      <p className="text-sm text-destructive">Campo obrigatório</p>
                    )}
                  </div>
                </div>

                {/* Botões */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => navigate("/")}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-primary hover:opacity-90 shadow-lg text-white"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Enviando..." : "Enviar Denúncia"}
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </main>

  <Footer />
    </div>
  );
};

export default RegistrarOcorrencia;
