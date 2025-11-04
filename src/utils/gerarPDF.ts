// Importa a biblioteca jsPDF para gerar PDFs
import jsPDF from "jspdf";

// Define a interface para o tipo de dados da denúncia
export interface DenunciaData {
  id: string;
  nome: string;
  cpf: string;
  endereco: string;
  telefone: string;
  tipoViolencia: string;
  descricao: string;
  dataOcorrido: string;
  dataRegistro: string;
  status: string;
}

// Função que gera o PDF da denúncia
export const gerarPDF = (denuncia: DenunciaData) => {
  const doc = new jsPDF(); // Cria um novo documento PDF
  const pageWidth = 210; // Largura da página A4 em mm
  const pageHeight = 297; // Altura da página A4 em mm
  const margin = 20; // Margem padrão

  // ========== CABEÇALHO ==========
  doc.setFillColor(158, 85, 211); // Cor de fundo roxo
  doc.rect(0, 0, pageWidth, 45, "F"); // Retângulo de fundo

  // Simula um ícone de escudo
  doc.setFillColor(255, 255, 255);
  doc.circle(25, 22, 8, "F");
  doc.setFillColor(158, 85, 211);
  doc.circle(25, 22, 6, "F");

  // Título principal
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("DELEGACIA DA MULHER", pageWidth / 2, 20, { align: "center" });

  // Subtítulo
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text("Registro de Ocorrência", pageWidth / 2, 30, { align: "center" });

  // Nota de confidencialidade
  doc.setFontSize(10);
  doc.text("Documento Confidencial", pageWidth / 2, 38, { align: "center" });

  // ========== PROTOCOLO DESTACADO ==========
  let y = 55;
  doc.setFillColor(245, 243, 248); // Fundo cinza claro
  doc.roundedRect(margin, y, pageWidth - 2 * margin, 25, 3, 3, "F"); // Retângulo arredondado

  // Título do protocolo
  doc.setTextColor(158, 85, 211);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("NÚMERO DO PROTOCOLO", pageWidth / 2, y + 8, { align: "center" });

  // Número do protocolo
  doc.setFontSize(18);
  doc.text(`#${denuncia.id}`, pageWidth / 2, y + 18, { align: "center" });

  // ========== INFORMAÇÕES DO REGISTRO ==========
  y += 35;
  doc.setFillColor(186, 135, 218); // Fundo roxo
  doc.rect(margin, y, pageWidth - 2 * margin, 8, "F"); // Barra de título

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("INFORMAÇÕES DO REGISTRO", margin + 3, y + 5.5);

  y += 12;
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  // Formata data do registro
  const dataRegistro = new Date(denuncia.dataRegistro).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  // Detalhes do registro
  doc.text(`Data do Registro: ${dataRegistro}`, margin + 3, y);
  y += 6;
  doc.text(`Status: ${denuncia.status}`, margin + 3, y);
  y += 6;
  doc.text(`Tipo de Violência: ${denuncia.tipoViolencia}`, margin + 3, y);

  // ========== DADOS DA VÍTIMA ==========
  y += 12;
  doc.setFillColor(186, 135, 218);
  doc.rect(margin, y, pageWidth - 2 * margin, 8, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("DADOS DA VÍTIMA", margin + 3, y + 5.5);

  y += 12;
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  // Box com informações da vítima
  const boxY = y;
  doc.setDrawColor(186, 135, 218);
  doc.setLineWidth(0.5);

  doc.setFont("helvetica", "bold");
  doc.text("Nome Completo:", margin + 3, y);
  doc.setFont("helvetica", "normal");
  doc.text(denuncia.nome, margin + 35, y);

  y += 7;
  doc.setFont("helvetica", "bold");
  doc.text("CPF:", margin + 3, y);
  doc.setFont("helvetica", "normal");
  doc.text(denuncia.cpf, margin + 35, y);

  y += 7;
  doc.setFont("helvetica", "bold");
  doc.text("Telefone:", margin + 3, y);
  doc.setFont("helvetica", "normal");
  doc.text(denuncia.telefone, margin + 35, y);

  y += 7;
  doc.setFont("helvetica", "bold");
  doc.text("Endereço:", margin + 3, y);
  doc.setFont("helvetica", "normal");
  const enderecoLines = doc.splitTextToSize(denuncia.endereco, pageWidth - 2 * margin - 38);
  doc.text(enderecoLines, margin + 35, y);

  y += 7 * enderecoLines.length;
  doc.rect(margin, boxY - 3, pageWidth - 2 * margin, y - boxY + 3, "S");

  // ========== DETALHES DA OCORRÊNCIA ==========
  y += 10;
  doc.setFillColor(186, 135, 218);
  doc.rect(margin, y, pageWidth - 2 * margin, 8, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("DETALHES DA OCORRÊNCIA", margin + 3, y + 5.5);

  y += 12;
  doc.setTextColor(60, 60, 60);
  doc.setFontSize(10);

  const dataOcorrido = new Date(denuncia.dataOcorrido).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  doc.setFont("helvetica", "bold");
  doc.text("Data e Hora do Ocorrido:", margin + 3, y);
  doc.setFont("helvetica", "normal");
  doc.text(dataOcorrido, margin + 55, y);

  y += 10;
  doc.setFont("helvetica", "bold");
  doc.text("Descrição Detalhada:", margin + 3, y);
  y += 6;

  doc.setFont("helvetica", "normal");
  const descBoxY = y;
  const descricaoLines = doc.splitTextToSize(denuncia.descricao, pageWidth - 2 * margin - 6);
  doc.text(descricaoLines, margin + 3, y);
  y += 6 * descricaoLines.length;

  doc.setDrawColor(186, 135, 218);
  doc.rect(margin, descBoxY - 3, pageWidth - 2 * margin, y - descBoxY + 3, "S");

  // ========== INFORMAÇÕES IMPORTANTES ==========
  y += 12;

  // Verifica se precisa criar uma nova página
  if (y > pageHeight - 70) {
    doc.addPage();
    y = 20;
  }

  doc.setFillColor(255, 220, 220);
  doc.roundedRect(margin, y, pageWidth - 2 * margin, 35, 3, 3, "F");

  doc.setTextColor(200, 50, 50);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("⚠ INFORMAÇÕES IMPORTANTES", margin + 3, y + 7);

  doc.setTextColor(60, 60, 60);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("• Este documento NÃO substitui o Boletim de Ocorrência oficial.", margin + 3, y + 14);
  doc.text("• É recomendado comparecer a uma Delegacia para formalizar a denúncia.", margin + 3, y + 20);
  doc.text("• Em caso de emergência, ligue 190 (Polícia Militar).", margin + 3, y + 26);
  doc.text("• Central de Atendimento à Mulher: 180 (ligação gratuita, 24h).", margin + 3, y + 32);

  // ========== RODAPÉ ==========
  doc.setFillColor(158, 85, 211);
  doc.rect(0, pageHeight - 25, pageWidth, 25, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("VOCÊ NÃO ESTÁ SOZINHA", pageWidth / 2, pageHeight - 17, { align: "center" });

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("Ligue 180 - Central de Atendimento à Mulher", pageWidth / 2, pageHeight - 11, { align: "center" });
  doc.text("Funcionamento 24 horas | Ligação gratuita", pageWidth / 2, pageHeight - 6, { align: "center" });

  // Linha decorativa no topo do rodapé
  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(0.5);
  doc.line(margin, pageHeight - 25, pageWidth - margin, pageHeight - 25);

  // Salva o PDF com o nome baseado no ID da denúncia
  doc.save(`ocorrencia_${denuncia.id}.pdf`);
};
