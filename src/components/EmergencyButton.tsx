import { Phone } from "lucide-react";

// Componente do botão de emergência
const EmergencyButton = ({ fixed = false }: { fixed?: boolean }) => {
  return (
    // Se fixed=true, o botão fica fixo no canto inferior direito
    <div className={fixed ? "fixed right-6 bottom-6 z-50" : ""}>
      {/* Link para ligar diretamente para o número 180 */}
      <a href="tel:180" className="emergency-button">
        <button
          className="bg-mulher-700 hover:bg-mulher-800 text-white px-4 py-3 rounded-full shadow-md flex items-center gap-2 pulse-accent"
        >
          {/* Ícone de telefone */}
          <Phone className="h-4 w-4" />
          Emergência
        </button>
      </a>
    </div>
  );
};

export default EmergencyButton;
