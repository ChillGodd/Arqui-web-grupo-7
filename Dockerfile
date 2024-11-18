# Primera etapa: Construcción de la aplicación Angular
FROM node:18 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos de dependencias primero para optimizar el uso de caché
COPY package*.json ./

# Instala las dependencias de producción
RUN npm ci

# Copia el resto del proyecto después de instalar las dependencias
COPY . .

# Ejecuta el build de producción
RUN npx ng build --configuration=production

# Segunda etapa: Servir la aplicación con Nginx
FROM nginx:1.21-alpine

# Copia la configuración personalizada de Nginx al contenedor
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copia el contenido compilado desde la etapa de construcción
COPY --from=build /app/dist/awgrupo7-frontend /usr/share/nginx/html

# Expone el puerto 80 para servir la aplicación
EXPOSE 8080