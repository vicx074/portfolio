# Portfólio Victor Eduardo

Este é um projeto de portfólio pessoal desenvolvido com Angular 19 e back-end Flask para o formulário de contato.

## Tecnologias Utilizadas

- Frontend:
  - Angular 19
  - TypeScript
  - HTML/SCSS
  
- Backend:
  - Flask
  - Flask-Mail
  - Flask-CORS

## Requisitos

- Node.js 18+ 
- NPM 8+
- Python 3.8+
- pip

## Como executar o projeto

### Frontend

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
```

2. Instale as dependências:
```bash
cd portfolio-victor
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm start
```

4. Acesse a aplicação em `http://localhost:4200`

### Backend (Formulário de Contato)

1. Navegue até a pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
pip install -r requirements.txt
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na pasta `backend/` com as seguintes variáveis:
   ```
   EMAIL_USER=victororg22@gmail.com
   EMAIL_PASSWORD=sua_senha_de_app_aqui
   ```
   
   **Nota:** Para o Gmail, use uma "Senha de App" e não sua senha principal.

4. Execute o servidor Flask:
```bash
python app.py
```

5. O backend estará disponível em `http://localhost:5000`

## Estrutura do Projeto

- `src/app/components/` - Componentes da aplicação frontend
  - `home` - Página inicial
  - `about` - Página Sobre
  - `works` - Página de Projetos
  - `contact` - Página de Contato
- `backend/` - Servidor Flask para processamento do formulário de contato

## Build para Produção

Para gerar uma versão de produção do projeto frontend:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## Autor

Victor Eduardo
