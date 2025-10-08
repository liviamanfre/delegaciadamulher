import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { BookOpen, FileText, Scale, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Juridico = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-soft">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-mulher-800 mb-4">Orientações Jurídicas</h1>
        <p className="text-muted-foreground max-w-3xl">Conheça seus direitos e as proteções legais disponíveis para mulheres em situação de violência. Oferecemos orientação jurídica gratuita para ajudá-la a tomar as melhores decisões.</p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-mulher-800 mb-6">Áreas de atendimento jurídico</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mulher-100 rounded-lg">
                  <BookOpen className="h-6 w-6 text-mulher-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mulher-800">Lei Maria da Penha</h3>
                  <p className="text-sm text-muted-foreground">Orientações sobre os mecanismos de proteção previstos na Lei 11.340/2006 e como utilizá-los a seu favor.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mulher-100 rounded-lg">
                  <FileText className="h-6 w-6 text-mulher-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mulher-800">Direito de Família</h3>
                  <p className="text-sm text-muted-foreground">Informações sobre divórcio, guarda de filhos, pensão alimentícia e divisão de bens em casos de violência doméstica.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mulher-100 rounded-lg">
                  <Scale className="h-6 w-6 text-mulher-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mulher-800">Direito Penal</h3>
                  <p className="text-sm text-muted-foreground">Orientações sobre processos criminais contra agressores, tipos penais aplicáveis e andamento processual.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mulher-100 rounded-lg">
                  <HomeIcon className="h-6 w-6 text-mulher-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mulher-800">Direitos Sociais</h3>
                  <p className="text-sm text-muted-foreground">Informações sobre direitos trabalhistas, benefícios sociais e outros direitos afetados pela situação de violência.</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
        {/* FAQ and CTA */}
        <section className="mt-10">
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-mulher-800 mb-4">Perguntas frequentes</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-mulher-800">O que é a Lei Maria da Penha?</p>
                <p>A Lei Maria da Penha (Lei 11.340/2006) é uma legislação brasileira que cria mecanismos para coibir a violência doméstica e familiar contra a mulher. Ela estabelece medidas de assistência e proteção às mulheres em situação de violência.</p>
              </div>

              <div>
                <p className="font-semibold text-mulher-800">Quem pode solicitar medidas protetivas?</p>
                <p>Qualquer mulher que esteja em situação de violência doméstica e familiar pode solicitar medidas protetivas de urgência. O pedido pode ser feito diretamente pela mulher ou pelo Ministério Público.</p>
              </div>

              <div>
                <p className="font-semibold text-mulher-800">Preciso de advogado para registrar um boletim de ocorrência?</p>
                <p>Não. O registro do boletim de ocorrência pode ser feito sem a presença de advogado. Entretanto, para as etapas seguintes do processo judicial, é recomendável contar com assistência jurídica.</p>
              </div>

              <div>
                <p className="font-semibold text-mulher-800">Como obter assistência jurídica gratuita?</p>
                <p>A assistência jurídica gratuita pode ser obtida através da Defensoria Pública, dos Núcleos de Prática Jurídica das faculdades de Direito e de ONGs que oferecem este tipo de apoio.</p>
              </div>
            </div>
          </Card>

          <div className="mt-8">
            <div className="rounded-lg bg-mulher-50 p-8 text-center">
              <h3 className="text-2xl font-bold text-mulher-800 mb-2">Precisa de orientação jurídica gratuita?</h3>
              <p className="text-muted-foreground mb-6">Nossa equipe de profissionais está disponível para ajudar você a compreender seus direitos e as medidas legais que podem ser adotadas em seu caso.</p>
              <div className="flex items-center justify-center gap-4">
                <Button className="bg-mulher-700 text-white" onClick={() => navigate('/agendar?type=juridico')}>Agendar Consulta Jurídica</Button>
                <Button variant="outline" className="border-mulher-300 text-mulher-800" onClick={() => navigate('/registrar')}>Registrar Ocorrência</Button>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-8">
          <Button onClick={() => navigate(-1)} className="bg-mulher-700 text-white">Voltar</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Juridico;
