# Appetite Admin - Docker

Este guia fornece instruções para executar a aplicação Appetite Admin usando Docker.

## Pré-requisitos

- Docker instalado
- Docker Compose instalado

## Como Executar

1. **Crie um arquivo `.env` na raiz do projeto:**
```
PORTA=3000
```

2. **Execute a aplicação:**
```bash
docker-compose -f docker/docker-compose.yml up -d
```

A aplicação estará disponível em: http://localhost:3000

## Comandos Úteis

- **Reconstruir e reiniciar após alterações:**
```bash
docker-compose -f docker/docker-compose.yml up -d --build
```

- **Parar a aplicação:**
```bash
docker-compose -f docker/docker-compose.yml down
```

- **Ver logs:**
```bash
docker-compose -f docker/docker-compose.yml logs -f
```