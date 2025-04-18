# Usando uma imagem base do Node.js
FROM node:14

# Definindo o diretório de trabalho da aplicação
WORKDIR /usr/src/app

# Copiando o package.json e o package-lock.json (se existirem)
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando todo o código da aplicação
COPY . .

# Expondo a porta que o servidor vai rodar
EXPOSE 3000

# Iniciando a aplicação
CMD ["npm", "start"]
