// Importa funções para manipulação de classes CSS
import { clsx, type ClassValue } from "clsx"; // clsx combina classes condicionalmente
import { twMerge } from "tailwind-merge";    // twMerge mescla classes do Tailwind sem duplicação

// Função que recebe múltiplos valores de classe e retorna uma string final
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); // Combina classes com clsx e remove duplicadas com twMerge
}
