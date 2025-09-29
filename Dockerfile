# Usar uma imagem base Node.js LTS (Long Term Support)
FROM node:20-slim

# Criar e definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar os arquivos de dependências
COPY ../package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o código fonte da aplicação
COPY .. .

# Expor a porta que a aplicação utiliza
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
