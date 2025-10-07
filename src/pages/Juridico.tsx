import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Juridico = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-mulher-800 mb-4">Orientações Jurídicas</h1>
        <p className="text-muted-foreground mb-6">Receba orientações sobre seus direitos e como garantir a sua proteção legal.</p>
        <Button onClick={() => navigate(-1)} className="bg-mulher-700 text-white">Voltar</Button>
      </main>
      <Footer />
    </div>
  );
};

export default Juridico;
