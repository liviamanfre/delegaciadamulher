import { Shield, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-mulher-700" />
          <Link to="/" className="text-2xl font-bold text-mulher-700">
            Delegacia da Mulher
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/registrar" className="text-gray-700 hover:text-mulher-700 transition-colors">Registrar Ocorrência</Link>
          <Link to="/historico" className="text-gray-700 hover:text-mulher-700 transition-colors">Histórico</Link>
        </nav>

        {/* emergency button removed from header to avoid duplication; use fixed EmergencyButton component on pages */}
      </div>
    </header>
  );
};

export default Header;
