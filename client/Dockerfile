FROM node:8 

LABEL maintainer Godefroi Roussel, godefroi.roussel@gmail.com  

RUN mkdir /home/client 

WORKDIR /home/client 

ADD . . 

RUN npm install 

# Install webpack to build the app on the server  
RUN npm install webpack  

# Build the app 
RUN npm run build 

ENV PORT=1234

EXPOSE 1234 

CMD [ "node", "/home/client/server.js" ]