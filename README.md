# Delegacia da Mulher 👩‍⚖️

Sistema web para registrar e acompanhar ocorrências relacionadas à violência contra a mulher, com funcionalidades de suporte, histórico e atendimento.

---

## Índice

1. Visão geral  
2. Tecnologias utilizadas  
3. Funcionalidades  
4. Diagramas (Mermaid)  
   - Diagrama de Classes  
   - Diagrama de Casos de Uso  
   - Diagrama de Fluxo 
5. Instalação e Execução  
6. Considerações futuras / Melhorias
7. Autores 

---

## 1. Visão geral

O sistema permite que mulheres (ou cidadãos) registrem ocorrências (de modo anônimo ou identificadas), agendem consultas, peçam apoio, visualizem o histórico, façam download da ocorrência em PDF e entrem em contato com a delegacia para ajuda. A ideia é criar uma ponte digital segura entre vítimas e atendimento especializado.

---

## 2. Tecnologias utilizadas

- **Frontend**: TypeScript, React  
- **Estilização**: Tailwind CSS 
- **Bibliotecas auxiliares**: geração de PDF, autenticação JWT, roteamento, etc.

---

## 3. Funcionalidades principais 

- 📄 Registro de ocorrência (anônima ou não)
- 📅 Agendamento de consulta com profissionais da delegacia
- 🧠 Acesso a informações e materiais de apoio ao público feminino
- 🕓 Histórico completo das ocorrências já registradas
- 📥 Geração e download de PDF da ocorrência
- 📞 Canal direto de contato com a delegacia (mensagem ou suporte)

---

## 4. Diagramas (Mermaid)

### 4.1 Diagrama de Classes (simplificado)

```mermaid
classDiagram
    class Usuario {
        +id: UUID
        +nome: String
        +email: String
        +senha: String
        +telefone: String
        +isAnonimo: Boolean
    }

    class Ocorrencia {
        +id: UUID
        +descricao: String
        +data: Date
        +status: String
        +pdfPath: String
    }

    class Consulta {
        +id: UUID
        +dataHora: DateTime
        +local: String
    }

    class Contato {
        +id: UUID
        +mensagem: String
        +dataEnvio: Date
        +resposta: String
    }

    Usuario "1" --> "0..*" Ocorrencia
    Usuario "1" --> "0..*" Consulta
    Usuario "1" --> "0..*" Contato
```

### 4.2 Diagrama de Casos de Uso

```mermaid
flowchart LR
    Vitima["Vítima"]:::actor
    Delegacia["Delegacia"]:::actor

    Vitima --> RO["(Registrar Ocorrência)"]
    Vitima --> AC["(Agendar Consulta)"]
    Vitima --> VH["(Visualizar Histórico)"]
    Vitima --> BP["(Baixar PDF da Ocorrência)"]
    Vitima --> SA["(Solicitar Apoio)"]

    Delegacia --> RC["(Responder Contato)"]
    Delegacia --> AO["(Analisar Ocorrências)"]
    Delegacia --> GC["(Gerenciar Consultas)"]
```

### 4.3 Diagrama de Fluxo (Simplificado)

```mermaid
  sequenceDiagram
    participant Usuária
    participant Sistema
    participant Banco

    Usuária->>Sistema: Preenche formulário
    Sistema->>Banco: Salva ocorrência
    Banco-->>Sistema: Confirmação
    Sistema-->>Usuária: Retorno com ID e link do PDF
``` 

### 5. Instalação e Execução

# Clone o repositório
git clone https://github.com/liviamanfre/delegaciadamulher.git
cd delegaciadamulher

# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build


### 6. Considerações futuras / Melhorias

🔐 Autenticação mais robusta (autenticação multifatorial)

📲 Sistema de notificações (e-mail, SMS)

💬 Chat em tempo real para suporte emergencial

Geolocalização de ocorrências 

### 7. Autores 

Projeto desenvolvido por Lívia Manfré, Luiza Félix e Maria Clara 