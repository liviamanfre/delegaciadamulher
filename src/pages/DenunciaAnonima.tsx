import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { gerarPDF } from "@/utils/gerarPDF";

const DenunciaAnonima = () => {
  const navigate = useNavigate();

  const [local, setLocal] = useState("");
  const [date, setDate] = useState("");
  const [victimInfo, setVictimInfo] = useState("");
  const [aggressorInfo, setAggressorInfo] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const entry = {
      id: Date.now().toString(),
      local,
      date,
      victimInfo,
      aggressorInfo,
      description,
      createdAt: new Date().toISOString(),
      anonymous: true,
    };

    const existing = JSON.parse(localStorage.getItem("denuncias") || "[]");
    existing.push(entry);
    localStorage.setItem("denuncias", JSON.stringify(existing));

    // generate PDF similar to registrar ocorrencia
    const pdfData = {
      id: entry.id,
      nome: victimInfo || "Anônimo",
      cpf: "",
      endereco: local || "",
      telefone: "",
      tipoViolencia: "Denúncia Anônima",
      descricao: description || "",
      dataOcorrido: date || entry.createdAt,
      dataRegistro: entry.createdAt,
      status: "Registrada",
    };

    gerarPDF(pdfData);

    toast({ title: "Denúncia recebida", description: "Sua denúncia anônima foi registrada com sucesso." });

    // clear
    setLocal("");
    setDate("");
    setVictimInfo("");
    setAggressorInfo("");
    setDescription("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-soft">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-mulher-800 mb-4">Denúncia Anônima</h1>
        <p className="text-muted-foreground max-w-3xl mb-6">Se você tem conhecimento de uma situação de violência contra mulher, faça uma denúncia anônima. Sua identificação é totalmente preservada.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 md:col-span-2">
            <h3 className="text-xl font-semibold text-mulher-800 mb-4">Formulário de denúncia</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block text-sm font-medium text-muted-foreground mb-1">Local da ocorrência</label>
                <Input placeholder="Endereço ou referência do local" value={local} onChange={(e) => setLocal(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium text-muted-foreground mb-1">Data aproximada</label>
                <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium text-muted-foreground mb-1">Informações sobre a vítima (opcional)</label>
                <Input placeholder="Nome, idade ou outras informações relevantes" value={victimInfo} onChange={(e) => setVictimInfo(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium text-muted-foreground mb-1">Informações sobre o(a) agressor(a) (opcional)</label>
                <Input placeholder="Nome, características físicas ou outras informações relevantes" value={aggressorInfo} onChange={(e) => setAggressorInfo(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium text-muted-foreground mb-1">Descrição da situação</label>
                <Textarea placeholder="Descreva detalhadamente o ocorrido ou a situação de risco" value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>

              <div className="text-sm text-muted-foreground mb-4">Sua denúncia é anônima e confidencial. Os dados fornecidos serão utilizados exclusivamente pelas autoridades competentes para investigação.</div>

              <Button type="submit" className="bg-mulher-700 text-white">Enviar Denúncia Anônima</Button>
            </form>
          </Card>

          <aside>
            <Card className="p-6">
              <h4 className="text-lg font-semibold text-mulher-800 mb-3">Sua identidade está protegida</h4>
              <p className="text-sm text-muted-foreground">Este canal garante o anonimato de quem denuncia. Não é necessário se identificar e todos os dados são tratados com sigilo.</p>

              <h5 className="mt-4 font-semibold text-mulher-800">Dicas para uma denúncia efetiva</h5>
              <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                <li>Forneça o máximo de detalhes possível sobre o ocorrido</li>
                <li>Informe endereços e horários com precisão, se souber</li>
                <li>Indique se há crianças ou idosos envolvidos</li>
                <li>Mencione se a vítima já sofreu violência anteriormente</li>
                <li>Informe se o agressor possui armas</li>
              </ul>

              <div className="mt-6 p-4 bg-red-50 rounded">
                <h6 className="font-semibold text-red-600">Situação de emergência?</h6>
                <p className="text-sm text-muted-foreground mt-2">Em caso de violência em andamento ou risco imediato, ligue para:</p>
                <div className="mt-3 flex flex-col gap-2">
                  <a href="tel:190" className="inline-block">
                    <Button className="bg-red-600 text-white">Polícia Militar - 190</Button>
                  </a>
                  <a href="tel:180" className="inline-block">
                    <Button className="bg-mulher-700 text-white">Central de Atendimento à Mulher - 180</Button>
                  </a>
                </div>
              </div>
            </Card>
          </aside>
        </div>

        <div className="mt-8">
          <Button onClick={() => navigate(-1)} className="bg-mulher-700 text-white">Voltar</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DenunciaAnonima;
