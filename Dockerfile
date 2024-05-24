# Utiliser l'image de base Nginx
FROM nginx:alpine

# Copier le contenu du dossier public dans le dossier de serveur web
COPY public/ /usr/share/nginx/html/

# Exposer le port 80
EXPOSE 80

# Lancer Nginx en arrière-plan
CMD ["nginx", "-g", "daemon off;"]
