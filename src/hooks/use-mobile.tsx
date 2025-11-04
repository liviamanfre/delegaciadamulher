import * as React from "react";

// Define o breakpoint para considerar um dispositivo como mobile
const MOBILE_BREAKPOINT = 768;

// Hook customizado para verificar se o usuário está em um dispositivo mobile
export function useIsMobile() {
  // Estado que armazena se é mobile ou não
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Cria um MediaQueryList para acompanhar mudanças de largura da tela
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Função que atualiza o estado quando a largura muda
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Adiciona o listener de mudança
    mql.addEventListener("change", onChange);

    // Define o valor inicial
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    // Remove o listener quando o componente for desmontado
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Retorna booleano definitivo (não undefined)
  return !!isMobile;
}
