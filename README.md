# Vittais

Projeto fullstack com **React** no frontend e **NestJS** + **Prisma** no backend, utilizando **PostgreSQL** como banco de dados.

## Estrutura

- `frontend/` — Aplicação React
- `backend/` — API NestJS com Prisma ORM
- `docker-compose.yml` — Configuração do banco de dados PostgreSQL

## Pré-requisitos

- Node.js (recomendado v18+)
- pnpm ou npm
- Docker (para banco de dados local)

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/vittais.git
cd vittais

# Instale dependências do frontend
cd frontend
pnpm install

# Instale dependências do backend
cd ../backend
pnpm install
```

## Banco de Dados

Inicie o PostgreSQL com Docker:

```bash
docker-compose up -d
```

Configure a variável `DATABASE_URL` em `backend/.env`:

```
DATABASE_URL=postgresql://postgres:vittais@localhost:5432/postgres
```

## Prisma

Rode as migrations e gere o client:

```bash
pnpx prisma migrate dev
pnpx prisma generate
```

## Executando o Backend

```bash
pnpm start
```

## Executando o Frontend

```bash
cd ../frontend
pnpm start
```

## Scripts úteis

- `pnpm dev` — Executa em modo desenvolvimento
- `pnpm build` — Gera build de produção

## Contribuição

Pull requests são bem-vindos!  
Abra issues para sugestões ou problemas.

## Licença

MIT