import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, FileText, Calendar, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Medidas = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-soft">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-mulher-800 mb-4">Medidas Protetivas de Urgência</h1>
        <p className="text-muted-foreground max-w-3xl">As medidas protetivas de urgência são mecanismos legais criados pela Lei Maria da Penha para garantir a segurança imediata de mulheres em situação de violência doméstica e familiar.</p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-mulher-800 mb-6">Principais tipos de medidas protetivas</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mulher-100 rounded-lg">
                  <Shield className="h-6 w-6 text-mulher-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mulher-800">Afastamento do agressor</h3>
                  <p className="text-sm text-muted-foreground">O agressor é obrigado a manter distância mínima da vítima e seus familiares.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mulher-100 rounded-lg">
                  <FileText className="h-6 w-6 text-mulher-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mulher-800">Proibição de contato</h3>
                  <p className="text-sm text-muted-foreground">Proibição de qualquer forma de contato com a vítima, seus familiares e testemunhas.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mulher-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-mulher-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mulher-800">Restrição de visitas</h3>
                  <p className="text-sm text-muted-foreground">Restrição ou suspensão de visitas aos dependentes menores, ouvida a equipe de atendimento multidisciplinar.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mulher-100 rounded-lg">
                  <CheckSquare className="h-6 w-6 text-mulher-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mulher-800">Pensão alimentícia</h3>
                  <p className="text-sm text-muted-foreground">Pagamento de pensão alimentícia provisória quando houver dependentes em comum.</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
        {/* Steps */}
        <section className="mt-10">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-mulher-800 mb-4">Como solicitar uma medida protetiva</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-mulher-100 text-mulher-700">1</div>
                <div>
                  <p className="font-semibold">Registre um Boletim de Ocorrência</p>
                  <p className="text-sm text-muted-foreground">Compareça a uma Delegacia da Mulher ou delegacia comum para registrar um boletim de ocorrência.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-mulher-100 text-mulher-700">2</div>
                <div>
                  <p className="font-semibold">Solicite as medidas protetivas</p>
                  <p className="text-sm text-muted-foreground">Durante o registro do B.O., solicite as medidas protetivas que você necessita.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-mulher-100 text-mulher-700">3</div>
                <div>
                  <p className="font-semibold">Análise judicial</p>
                  <p className="text-sm text-muted-foreground">O pedido será enviado ao juiz, que poderá conceder as medidas em até 48 horas.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-mulher-100 text-mulher-700">4</div>
                <div>
                  <p className="font-semibold">Acompanhamento</p>
                  <p className="text-sm text-muted-foreground">Após concedida, é importante denunciar qualquer descumprimento da medida protetiva imediatamente.</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Banner */}
        <section className="mt-10">
          <div className="rounded-lg bg-mulher-50 p-8 text-center">
            <h3 className="text-2xl font-bold text-mulher-800 mb-2">Precisa de ajuda para solicitar uma medida protetiva?</h3>
            <p className="text-muted-foreground mb-6">Se você está em situação de violência ou conhece alguém que esteja, saiba que existem serviços gratuitos de orientação disponíveis.</p>
            <div className="flex items-center justify-center gap-4">
              <Button className="bg-mulher-700 text-white" onClick={() => navigate('/registrar')}>Registrar Ocorrência</Button>
              <a href="tel:180" className="inline-block">
                <Button variant="outline">Ligar para 180</Button>
              </a>
            </div>
          </div>
        </section>

        <div className="mt-8">
          <Button onClick={() => navigate(-1)} className="bg-mulher-700 text-white">Voltar</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Medidas;
