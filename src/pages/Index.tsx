// Atualize esta página (o conteúdo abaixo é apenas um modelo padrão caso você ainda não tenha modificado a página)

const Index = () => {
  return (
    // Container principal que ocupa toda a altura da tela e centraliza o conteúdo
    <div className="flex min-h-screen items-center justify-center bg-background">
      
      {/* Bloco central com texto alinhado ao centro */}
      <div className="text-center">
        {/* Título principal da página */}
        <h1 className="mb-4 text-4xl font-bold">Bem-vindo ao seu aplicativo em branco</h1>
        
        {/* Subtítulo ou texto de apoio */}
        <p className="text-xl text-muted-foreground">
          Comece a construir seu projeto incrível aqui!
        </p>
      </div>
    </div>
  );
};

// Exporta o componente para ser utilizado em outras partes do projeto
export default Index;
