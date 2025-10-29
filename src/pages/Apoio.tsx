import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Heart, Users, Handshake, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Apoio = () => {
  const navigate = useNavigate(); // Hook para navegação entre páginas

  return (
    <div className="min-h-screen flex flex-col bg-gradient-soft">
      {/* Cabeçalho do site */}
      <Header />

      {/* Conteúdo principal */}
      <main className="flex-1 container mx-auto px-6 py-12">

        {/* Título principal da página */}
        <h1 className="text-4xl font-extrabold text-mulher-800 mb-4">
          Apoio Psicológico e Social
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          Oferecemos suporte psicológico e social especializado para mulheres em situação de violência, contribuindo para o processo de recuperação emocional e reconstrução da vida.
        </p>

        {/* Seção: lista de serviços de apoio */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-mulher-800 mb-6">
            Nossos serviços de apoio
          </h2>

          {/* Grade com os principais tipos de apoio disponíveis */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Atendimento psicológico individual */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mulher-100 rounded-lg">
                  <Heart className="h-6 w-6 text-mulher-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mulher-800">
                    Atendimento Psicológico
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sessões de terapia individual para ajudar no processo de recuperação emocional e fortalecimento pessoal.
                  </p>
                </div>
              </div>
            </Card>

            {/* Grupos de apoio entre mulheres */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mulher-100 rounded-lg">
                  <Users className="h-6 w-6 text-mulher-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mulher-800">
                    Grupos de Apoio
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Encontros com outras mulheres que passaram por situações semelhantes, ajudando na troca de experiências e no processo de cura.
                  </p>
                </div>
              </div>
            </Card>

            {/* Assistência social e encaminhamentos */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mulher-100 rounded-lg">
                  <Handshake className="h-6 w-6 text-mulher-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mulher-800">
                    Assistência Social
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Orientação sobre benefícios sociais disponíveis, encaminhamento para abrigos e auxílio no acesso a outros serviços públicos.
                  </p>
                </div>
              </div>
            </Card>

            {/* Atendimento psicológico remoto (telefone) */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mulher-100 rounded-lg">
                  <Phone className="h-6 w-6 text-mulher-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mulher-800">
                    Telatendimento
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Serviços de apoio psicológico por telefone para mulheres que não podem comparecer presencialmente aos centros de atendimento.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Seção: informações sobre como acessar o apoio */}
        <section className="mt-10">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-mulher-800 mb-4">
              Como acessar o apoio psicológico e social
            </h3>

            <div className="space-y-4">
              {/* Centros de Referência */}
              <div className="flex items-start gap-4">
                <div className="w-1 bg-mulher-700 rounded mr-4" style={{ width: 6 }} />
                <div>
                  <h4 className="font-semibold text-mulher-800">
                    Centros de Referência
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Os Centros de Referência de Atendimento à Mulher (CRAMs) oferecem atendimento psicológico, social e jurídico gratuito. Para localizar o centro mais próximo, entre em contato com a Central de Atendimento à Mulher - Ligue 180.
                  </p>
                </div>
              </div>

              {/* CREAS e CRAS */}
              <div className="flex items-start gap-4">
                <div className="w-1 bg-mulher-700 rounded mr-4" style={{ width: 6 }} />
                <div>
                  <h4 className="font-semibold text-mulher-800">CREAS e CRAS</h4>
                  <p className="text-sm text-muted-foreground">
                    Os Centros de Referência Especializado de Assistência Social (CREAS) e os Centros de Referência de Assistência Social (CRAS) também oferecem suporte às mulheres em situação de violência.
                  </p>
                </div>
              </div>

              {/* Delegacias da Mulher */}
              <div className="flex items-start gap-4">
                <div className="w-1 bg-mulher-700 rounded mr-4" style={{ width: 6 }} />
                <div>
                  <h4 className="font-semibold text-mulher-800">Delegacias da Mulher</h4>
                  <p className="text-sm text-muted-foreground">
                    As Delegacias Especializadas de Atendimento à Mulher também podem encaminhar você para serviços de apoio psicológico e social após o registro da ocorrência.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Seção: banner de incentivo para buscar ajuda */}
        <section className="mt-10">
          <div className="rounded-lg bg-mulher-50 p-8 text-center">
            <h3 className="text-2xl font-bold text-mulher-800 mb-2">
              Você não está sozinha nessa jornada
            </h3>
            <p className="text-muted-foreground mb-6">
              Buscar ajuda é o primeiro passo para reconstruir sua vida. Nossos profissionais estão preparados para oferecer o acolhimento e suporte de que você precisa.
            </p>

            {/* Botões de ação */}
            <div className="flex items-center justify-center gap-4">
              {/* Botão para ligação direta ao 180 */}
              <a href="tel:180" className="inline-block">
                <Button className="bg-mulher-700 text-white">
                  Ligue 180 - Central de Atendimento à Mulher
                </Button>
              </a>

              {/* Botão para agendar atendimento psicológico */}
              <Button
                className="bg-mulher-700 text-white"
                onClick={() => navigate('/agendar?type=psicologico')}
              >
                Agendar Atendimento
              </Button>
            </div>
          </div>
        </section>

        {/* Botão para voltar à página anterior */}
        <div className="mt-8">
          <Button onClick={() => navigate(-1)} className="bg-mulher-700 text-white">
            Voltar
          </Button>
        </div>
      </main>

      {/* Rodapé do site */}
      <Footer />
    </div>
  );
};

export default Apoio;
