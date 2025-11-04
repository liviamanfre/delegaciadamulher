import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, FileText, AlertTriangle, Heart, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import EmergencyButton from "@/components/EmergencyButton";

const Home = () => {
  // Hook para navegar entre as páginas
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-soft">
      {/* Cabeçalho fixo no topo da página */}
      <Header />
      
      <main className="flex-1">
        {/* Seção principal de destaque (banner inicial) */}
        <HeroSection />

        {/* Conteúdo principal da página */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Texto informativo (atualmente vazio) */}
            <div className="text-center text-sm text-muted-foreground pt-4">
            </div>

            {/* Seção: Como podemos ajudar */}
            <section className="container mx-auto px-4 py-12">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-mulher-800">
                Como podemos ajudar você?
              </h2>

              <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-2 mb-6">
                Nossa missão é acolher, ouvir e proporcionar a você todo o suporte necessário para enfrentar essa situação.
              </p>

              {/* Primeira linha de serviços (3 colunas) */}
              <div className="grid md:grid-cols-3 gap-6">
                <ServiceCard 
                  title="Registro de Ocorrência" 
                  description="Registre sua denúncia de forma segura e confidencial, com todo o acolhimento que você merece." 
                  icon={FileText} 
                  linkTo="/registrar" 
                />

                <ServiceCard 
                  title="Medidas Protetivas" 
                  description="Entenda como solicitar medidas de proteção para garantir sua segurança e de seus dependentes." 
                  icon={Shield} 
                  linkTo="/medidas" 
                />

                <ServiceCard 
                  title="Apoio Psicológico e Social" 
                  description="Saiba mais sobre os serviços de apoio psicológico e social disponíveis para mulheres em situação de violência." 
                  icon={Heart} 
                  linkTo="/apoio" 
                />
              </div>

              {/* Segunda linha de serviços (2 colunas) */}
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <ServiceCard 
                  title="Orientações Jurídicas" 
                  description="Receba orientações sobre seus direitos e como garantir a sua proteção legal." 
                  icon={Shield} 
                  linkTo="/juridico" 
                />

                <ServiceCard 
                  title="Denúncia Anônima" 
                  description="Se você tem informações sobre um caso, faça uma denúncia anônima para ajudar outras mulheres." 
                  icon={User} 
                  linkTo="/anonima" 
                />
              </div>
              
              {/* Cartão de emergência e chamada para ação */}
              <div className="mt-8 space-y-8">

                {/* Cartão: Situação de emergência */}
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Ícone de alerta */}
                    <div className="p-3 bg-red-100 rounded-full">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>

                    {/* Texto e botões de emergência */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        Você está em perigo?
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Se você está em uma situação de emergência ou em perigo imediato, ligue imediatamente para o 180 (Disque Mulher) ou para os números de emergência da sua cidade.
                      </p>
                      <div className="flex items-center gap-3">
                        <a href="tel:180">
                          <Button className="bg-red-600 text-white">Disque 180</Button>
                        </a>
                        <a href="tel:190">
                          <Button variant="outline">Disque 190 (Polícia)</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Banner final: chamada de apoio emocional */}
                <div className="rounded-lg bg-mulher-50 p-8 text-center">
                  <h3 className="text-2xl font-bold text-mulher-800 mb-2">
                    Aqui você não está sozinha
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Clique em uma das opções acima ou entre em contato conosco para receber o suporte necessário. Sua segurança é nossa prioridade.
                  </p>
                  <div className="flex items-center justify-center">
                    <Button 
                      className="bg-mulher-700 text-white" 
                      onClick={() => navigate('/agendar')}
                    >
                      Entre em Contato
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Rodapé da página */}
      <Footer />
    </div>
  );
};

export default Home;
