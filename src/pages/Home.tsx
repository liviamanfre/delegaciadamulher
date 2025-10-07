import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, FileText, Lock, AlertCircle, Heart, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import EmergencyButton from "@/components/EmergencyButton";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-soft">
      <Header />
      
      <main className="flex-1">
        <HeroSection />

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">

          {/* Alert Card */}
          <Card className="bg-destructive/10 border-destructive/30 p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-destructive mb-2">
                  Em caso de emergência, ligue 190
                </h3>
                <p className="text-sm text-muted-foreground">
                  Se você está em perigo imediato, não hesite em contatar a polícia militar 
                  ou a Central de Atendimento à Mulher pelo telefone 180.
                </p>
              </div>
            </div>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard title="Seguro" description="Suas informações são armazenadas localmente no seu dispositivo" icon={Lock} linkTo="/registrar" />
            <ServiceCard title="Documentado" description="Gere um PDF da sua ocorrência para apresentar às autoridades" icon={FileText} linkTo="/registrar" />
            <ServiceCard title="Protegido" description="Sistema desenvolvido para proteger sua privacidade" icon={Shield} linkTo="/registrar" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-lg text-white text-lg py-6" onClick={() => navigate("/registrar")}>
              <Shield className="mr-2 h-5 w-5" />
              Registrar Ocorrência
            </Button>

            <Button size="lg" className="bg-mulher-700 hover:bg-mulher-800 text-white text-lg py-6" onClick={() => navigate("/historico")}>
              <FileText className="mr-2 h-5 w-5" />
              Ver Histórico
            </Button>
          </div>

          {/* Info Text */}
          <div className="text-center text-sm text-muted-foreground pt-4">
            <p>
              O registro aqui feito não substitui o boletim de ocorrência oficial. 
              Recomendamos que você procure uma delegacia para formalizar a denúncia.
            </p>
          </div>
            {/* How we can help section */}
            <section className="container mx-auto px-4 py-12">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-mulher-800">Como podemos ajudar você?</h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-2 mb-6">Nossa missão é acolher, ouvir e proporcionar a você todo o suporte necessário para enfrentar essa situação.</p>

              <div className="grid md:grid-cols-3 gap-6">
                <ServiceCard title="Registro de Ocorrência" description="Registre sua denúncia de forma segura e confidencial, com todo o acolhimento que você merece." icon={FileText} linkTo="/registrar" />
                <ServiceCard title="Medidas Protetivas" description="Entenda como solicitar medidas de proteção para garantir sua segurança e de seus dependentes." icon={Shield} linkTo="/medidas" />
                <ServiceCard title="Apoio Psicológico e Social" description="Saiba mais sobre os serviços de apoio psicológico e social disponíveis para mulheres em situação de violência." icon={Heart} linkTo="/apoio" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <ServiceCard title="Orientações Jurídicas" description="Receba orientações sobre seus direitos e como garantir a sua proteção legal." icon={Shield} linkTo="/juridico" />
                <ServiceCard title="Denúncia Anônima" description="Se você tem informações sobre um caso, faça uma denúncia anônima para ajudar outras mulheres." icon={User} linkTo="/anonima" />
              </div>
            </section>
        </div>
        </div>
      </main>

  <Footer />
    </div>
  );
};

export default Home;
