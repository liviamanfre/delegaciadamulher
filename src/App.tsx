// Importa os componentes e bibliotecas necessárias
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa as páginas do projeto
import Home from "./pages/Home";
import RegistrarOcorrencia from "./pages/RegistrarOcorrencia";
import Confirmacao from "./pages/Confirmacao";
import Historico from "./pages/Historico";
import NotFound from "./pages/NotFound";
import Medidas from "./pages/Medidas";
import Apoio from "./pages/Apoio";
import Juridico from "./pages/Juridico";
import DenunciaAnonima from "./pages/DenunciaAnonima";
import Agendar from "./pages/Agendar";
import EmergencyButton from "@/components/EmergencyButton";

// Cria o cliente do React Query para gerenciar o cache e requisições
const queryClient = new QueryClient();

const App = () => {
  return (
    // Provedor do React Query
    <QueryClientProvider client={queryClient}>
      {/* Provedor de tooltips globais */}
      <TooltipProvider>
        {/* Gerenciador de rotas */}
        <BrowserRouter>
          {/* Sistema de notificações */}
          <Toaster /> {/* Toaster padrão */}
          <Sonner /> {/* Toaster com animação */}

          {/* Botão de emergência fixo na tela */}
          <EmergencyButton fixed />

          {/* Definição das rotas principais da aplicação */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Página inicial */}
            <Route path="/registrar" element={<RegistrarOcorrencia />} /> {/* Registro de ocorrência */}
            <Route path="/medidas" element={<Medidas />} /> {/* Medidas protetivas */}
            <Route path="/apoio" element={<Apoio />} /> {/* Apoio psicológico */}
            <Route path="/agendar" element={<Agendar />} /> {/* Agendamento de atendimento */}
            <Route path="/juridico" element={<Juridico />} /> {/* Apoio jurídico */}
            <Route path="/anonima" element={<DenunciaAnonima />} /> {/* Denúncia anônima */}
            <Route path="/confirmacao/:id" element={<Confirmacao />} /> {/* Confirmação de ocorrência */}
            <Route path="/historico" element={<Historico />} /> {/* Histórico de ocorrências */}
            <Route path="*" element={<NotFound />} /> {/* Página não encontrada */}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

// Exporta o componente principal da aplicação
export default App;
