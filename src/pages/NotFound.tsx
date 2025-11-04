// Importa hooks do React Router e do React
import { useLocation } from "react-router-dom"; // Permite acessar a rota atual
import { useEffect } from "react"; // Permite executar código em efeitos colaterais

// Componente da página 404 (rota não encontrada)
const NotFound = () => {
  // Obtém o caminho atual da URL (ex: /rota-errada)
  const location = useLocation();

  // Efeito colateral executado toda vez que a rota muda
  useEffect(() => {
    // Mostra no console do navegador um aviso de rota inexistente (para fins de debug)
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]); // Dependência: reexecuta se o caminho mudar

  // Renderização do conteúdo da página
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* Container centralizado */}
      <div className="text-center">
        {/* Código de erro */}
        <h1 className="mb-4 text-4xl font-bold">404</h1>

        {/* Mensagem amigável */}
        <p className="mb-4 text-xl text-gray-600">Oops! Página não encontrada</p>

        {/* Link para voltar à página inicial */}
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

// Exporta o componente para uso nas rotas
export default NotFound;
