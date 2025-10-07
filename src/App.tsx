import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegistrarOcorrencia from "./pages/RegistrarOcorrencia";
import Confirmacao from "./pages/Confirmacao";
import Historico from "./pages/Historico";
import NotFound from "./pages/NotFound";
import EmergencyButton from "@/components/EmergencyButton";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          <EmergencyButton fixed />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registrar" element={<RegistrarOcorrencia />} />
            <Route path="/confirmacao/:id" element={<Confirmacao />} />
            <Route path="/historico" element={<Historico />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
