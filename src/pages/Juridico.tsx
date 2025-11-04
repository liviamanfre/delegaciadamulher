// Importa o cabeçalho e o rodapé reutilizáveis
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Importa o componente de cartão e ícones usados na página
import { Card } from "@/components/ui/card";
import { BookOpen, FileText, Scale, Home as HomeIcon } from "lucide-react";

// Importa o botão e o hook para navegação
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Componente principal da página "Orientações Jurídicas"
const Juridico = () => {
  // Hook para navegar entre as rotas do aplicativo
  const navigate = useNavigate();

  return (
    // Estrutura principal da página com fundo em degradê e layout vertical
    <div className="min-h-screen flex flex-col bg-gradient-soft">

      {/* Cabeçalho fixo no topo */}
      <Header />

      {/* Conteúdo principal */}
      <main className="flex-1 container mx-auto px-6 py-12">
        
        {/* Título principal e texto introdutório */}
        <h1 className="text-4xl font-extrabold text-mulher-800 mb-4">
          Orientações Jurídicas
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          Conheça seus direitos e as proteções legais disponíveis para mulheres em situação de violência.
          Oferecemos orientação jurídica gratuita para ajudá-la a tomar as melhores decisões.
        </p>

        {/* ============================
            SEÇÃO: ÁREAS DE ATENDIMENTO
        ============================ */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-mulher-800 mb-6">
            Áreas de atendimento jurídico
          </h2>

          {/* Grade com 4 cartões representando áreas do direito */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Cartão: Lei Maria da Penha */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mulher-100 rounded-lg">
                  <BookOpen className="h-6 w-6 text-mulher-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mulher-800">
                    Lei Maria da Penha
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Orientações sobre os mecanismos de proteção previstos na Lei 11.340/2006
                    e como utilizá-los a seu favor.
                  </p>
                </div>
              </div>
            </Card>

            {/* Cartão: Direito de Família */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mulher-100 rounded-lg">
                  <FileText className="h-6 w-6 text-mulher-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mulher-800">
                    Direito de Família
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Informações sobre divórcio, guarda de filhos, pensão alimentícia e divisão
                    de bens em casos de violência doméstica.
                  </p>
                </div>
              </div>
            </Card>

            {/* Cartão: Direito Penal */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mulher-100 rounded-lg">
                  <Scale className="h-6 w-6 text-mulher-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mulher-800">
                    Direito Penal
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Orientações sobre processos criminais contra agressores, tipos penais aplicáveis
                    e andamento processual.
                  </p>
                </div>
              </div>
            </Card>

            {/* Cartão: Direitos Sociais */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mulher-100 rounded-lg">
                  <HomeIcon className="h-6 w-6 text-mulher-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mulher-800">
                    Direitos Sociais
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Informações sobre direitos trabalhistas, benefícios sociais e outros direitos
                    afetados pela situação de violência.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* ============================
            SEÇÃO: FAQ + CHAMADA À AÇÃO
        ============================ */}
        <section className="mt-10">
          {/* Cartão de Perguntas Frequentes */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-mulher-800 mb-4">
              Perguntas frequentes
            </h3>

            {/* Lista de perguntas e respostas */}
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-mulher-800">
                  O que é a Lei Maria da Penha?
                </p>
                <p>
                  A Lei Maria da Penha (Lei 11.340/2006) é uma legislação brasileira que cria mecanismos
                  para coibir a violência doméstica e familiar contra a mulher, oferecendo medidas de
                  proteção e assistência.
                </p>
              </div>

              <div>
                <p className="font-semibold text-mulher-800">
                  Quem pode solicitar medidas protetivas?
                </p>
                <p>
                  Qualquer mulher em situação de violência doméstica pode solicitar medidas protetivas de
                  urgência, diretamente ou com apoio do Ministério Público.
                </p>
              </div>

              <div>
                <p className="font-semibold text-mulher-800">
                  Preciso de advogado para registrar um boletim de ocorrência?
                </p>
                <p>
                  Não. O registro do boletim de ocorrência pode ser feito sem advogado, mas nas etapas
                  seguintes é recomendável ter assistência jurídica.
                </p>
              </div>

              <div>
                <p className="font-semibold text-mulher-800">
                  Como obter assistência jurídica gratuita?
                </p>
                <p>
                  A assistência jurídica gratuita pode ser obtida na Defensoria Pública, em Núcleos de
                  Prática Jurídica ou em ONGs que prestam esse tipo de apoio.
                </p>
              </div>
            </div>
          </Card>

          {/* Chamada para ação (CTA) - convite à consulta jurídica */}
          <div className="mt-8">
            <div className="rounded-lg bg-mulher-50 p-8 text-center">
              <h3 className="text-2xl font-bold text-mulher-800 mb-2">
                Precisa de orientação jurídica gratuita?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe de profissionais está disponível para ajudar você a compreender seus direitos
                e as medidas legais que podem ser adotadas no seu caso.
              </p>

              {/* Botões de ação */}
              <div className="flex items-center justify-center gap-4">
                <Button 
                  className="bg-mulher-700 text-white"
                  onClick={() => navigate('/agendar?type=juridico')}
                >
                  Agendar Consulta Jurídica
                </Button>

                <Button 
                  variant="outline" 
                  className="border-mulher-300 text-mulher-800"
                  onClick={() => navigate('/registrar')}
                >
                  Registrar Ocorrência
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Botão para voltar à página anterior */}
        <div className="mt-8">
          <Button 
            onClick={() => navigate(-1)} 
            className="bg-mulher-700 text-white"
          >
            Voltar
          </Button>
        </div>
      </main>

      {/* Rodapé da página */}
      <Footer />
    </div>
  );
};

// Exporta o componente para uso nas rotas do aplicativo
export default Juridico;
