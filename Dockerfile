# Usa la imagen oficial de Node con la versión deseada
FROM node:20

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN yarn install

# Copia el resto de la aplicación
COPY . .

# Compila la aplicación TypeScript
RUN yarn run build

# Expone el puerto 3000
EXPOSE 8080

# Inicia la aplicación cuando se ejecute el contenedor
CMD ["yarn", "start"]
