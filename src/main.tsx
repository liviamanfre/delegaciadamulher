// Importa a função createRoot para inicializar o React no DOM
import { createRoot } from "react-dom/client";

// Importa o componente principal da aplicação
import App from "./App.tsx";

// Importa o arquivo de estilos globais
import "./index.css";

// Renderiza o componente App dentro do elemento com id "root"
createRoot(document.getElementById("root")!).render(<App />);
