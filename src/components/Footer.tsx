import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mulher-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6" />
              <h3 className="text-xl font-bold">Delegacia da Mulher</h3>
            </div>
            <p className="text-mulher-100">
              Espaço dedicado a atender mulheres vítimas de violência, com foco em garantir o apoio necessário e encaminhamentos para proteção e justiça.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contatos Importantes</h4>
            <ul className="space-y-2 text-mulher-100">
              <li>Disque 180 - Central de Atendimento à Mulher</li>
              <li>Disque 190 - Polícia Militar</li>
              <li>Disque 192 - SAMU</li>
              <li>Disque 193 - Corpo de Bombeiros</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-mulher-100">
              <li><a href="https://www.gov.br/mdh/pt-br/navegue-por-temas/politicas-para-mulheres" className="hover:text-mulher-300 transition-colors">Ministério das Mulheres</a></li>
              <li><a href="https://www.gov.br/mdh/pt-br" className="hover:text-mulher-300 transition-colors">Ministério dos Direitos Humanos</a></li>
              <li><a href="https://www.defensoria.sp.def.br/dpesp/Default.aspx?idPagina=2871" className="hover:text-mulher-300 transition-colors">Defensoria Pública</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-mulher-700 mt-8 pt-4 text-center text-sm text-mulher-300">
          <p>© {new Date().getFullYear()} Delegacia da Mulher. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
