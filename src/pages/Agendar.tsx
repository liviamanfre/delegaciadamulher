import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Agendar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const entry = {
      id: Date.now().toString(),
      name,
      phone,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("agendamentos") || "[]");
    existing.push(entry);
    localStorage.setItem("agendamentos", JSON.stringify(existing));

    // show confirmation message
    toast({ title: "Entraremos em contato em breve." });

    // clear form
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-soft">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-mulher-800 mb-4">Entre em Contato</h1>
        <p className="text-muted-foreground max-w-3xl mb-6">Estamos aqui para ajudar. Preencha o formulário abaixo para entrar em contato conosco ou utilize um dos canais de atendimento disponíveis.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 md:col-span-2">
            <h3 className="text-xl font-semibold text-mulher-800 mb-4">Formulário de Contato</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Seu nome completo" value={name} onChange={(e) => setName(e.target.value)} />
                <Input placeholder="(00) 00000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="mt-4">
                <Input placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mt-4">
                <Textarea placeholder="Como podemos ajudar?" value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <div className="mt-4">
                <Button type="submit" className="bg-mulher-700 text-white">Enviar Mensagem</Button>
              </div>
            </form>
          </Card>

          <aside>
            <Card className="p-6">
              <h4 className="text-lg font-semibold text-mulher-800 mb-3">Canais de Atendimento</h4>
              <p className="text-sm text-muted-foreground"><strong>Telefones</strong><br/>Disque 180 - Central de Atendimento à Mulher<br/>Disque 190 - Polícia Militar</p>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground"><strong>E-mail</strong><br/>atendimento@delegaciadamulher.gov.br</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground"><strong>Endereço</strong><br/>Av. Principal, 1500 - Centro<br/>CEP: 00000-000<br/>Horário: Segunda a Sexta, 8h às 18h</p>
              </div>
              <div className="mt-4 p-4 bg-mulher-50 rounded">
                <h5 className="font-semibold text-mulher-800">Horários de Atendimento Presencial</h5>
                <p className="text-sm text-muted-foreground mt-2">Segunda a Sexta: 8h às 18h<br/>Sábados: 9h às 13h<br/>Plantão 24h: Para casos de emergência</p>
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

export default Agendar;
