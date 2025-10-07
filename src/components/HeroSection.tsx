import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 hero-gradient text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Delegacia da Mulher</h1>
          <p className="text-lg text-white/90 mb-6">Sua segurança e digndade em primeiro lugar. Um espaço dedicado a atender mulheres vítimas de violência, com foco em garantir o apoio necessário e encaminhamentos para proteção e justiça.</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-mulher-800 hover:bg-mulher-900 shadow-xl text-white" asChild>
              <Link to="/registrar">Registrar Ocorrência</Link>
            </Button>
            <Button className="bg-mulher-800 hover:bg-mulher-900 shadow-xl text-white" asChild>
              <Link to="/historico">Ver Histórico</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
