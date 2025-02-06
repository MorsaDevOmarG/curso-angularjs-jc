# Curso ANGULAR.JS

-Framework de JavaScript

- Jesús Conde

## Primeros pasos

- Instalamos AngularJs
  - Directo de la página, (puedes descargarlo)
- Instalamos Node.js
  - Desde la página oficial
  - En consola: **_npm init -y_**
  - **_npm i -g express-generator_**
  - Creamos un servidor con EXPRESS:
    -  **_express myserver_**
    -  **_npm install_**
    -  **_install --save-dev_**
- Instalamos Grunt
  - Es un automatizador de tareas
  - **_npm install -g grunt -cli
- **_YEOMAN_**
  - Workflow: 
    - es una colección de herramientas como: _GRUNT, GULP, BUILD, PACKAGE MANAGER (BOWER & NPM)_
    - **_npm install -g yo_**
    - **_npm install -g generator-angular_**
- Versión para producción:
  - **_grunt --force_**

#### SERVICES

- Permiten reutilizar código en la app
- Ejemplo:
  - Un Web Service
- Son objetos SINGLETON
  - Se inician solo 1 vez y perciten
- Son de carga ligera
  - Se cargan cuando un componente dependen de ello
- Son inyectados usando DI

#### MONGODB

- Ingresamos a la página:
  - **https://www.mongodb.com/try/download/community**
- Seleccionamos:
  - Versión
  - Plataforma
  - Paquete MSI
  - Iniciar SERVER:
    - **mongod**
  - Iniciar BD:
    - **mongosh**
  - INSERT:
    - db.nombreBD.insert( { "titulo": "Primer ejemplo", "usuario":"prueba" } );
  - UPDATE:
    - db.nombreBD.UPDATE( { "titulo": "Primer ejemplo modificado", "usuario":"prueba modificado" }, { upsert: true } );
    - Múltiples:
      - db.nombreBD.UPDATE( { "usuario":"prueba modificado" }, { $set: "usuario": "esther" }, { multi: true } );
  - SAVE:
    - db.nombreBD.save( { "titulo": "Primer ejemplo con save" } );
    - db.nombreBD.save( { "_id": ObjectId("1a2b3c4d5f"), "titulo": "Primer ejemplo con save" } );
  - FIND:
    - db.nombreBD.find() ó db.nombreBD.find( { } )
  - IN:
    - db.nombreBD.find( { "usuario": { $in: ["ester", "jesus"] } })
  - OR:
    - db.nombreBD.find( { $or: [ { "usuario": "ester" }, { "usuario": "jesus" } ] } )
  - REMOVE:
    - db.nombreBD.remove( { } )

##### APP CON EXPRESS.JS

- npm init -y
- npm install express
- Creamos un archivo de configuración
  - Para mandar a llamarlo es necesario ejecutar en consola:
    - node server (dentro del directorio)

  # Ejemplo de ROUTES en NODE.JS
    - ROUTE / VERB
      - ```
        app.route(path).VERB(callback);
        app.VERB(path, callback);

        app.get('/', function(req, res) {
          res.send('Petición GET');
        });

        app.post('/', function(req, res) {
          res.send('Petición POST');
        });

        **AGILIDAD CON NODE**
        app.route('/', function(req, res) {
          res.send('Petición GET');
        }).post('/', function(req, res) {
          res.send('Petición POST');
        });
      ```
    -Dependencias en proyecto:
      - morgan: LOGGER
      - compression: RESPUESTAS
      - body-parser: PETICIONES DE DATOS
      - method override: VERBOS HTTP

  ## MONGOOSE

  - Conectar modo genérico:
    - mongodb://nombreUsuario:password@hostname:puerto/basedato
  - Instancia Local:
    - mongodb://localhost/mean
  - Definir conexión directo en archivo: **config/express.js**
    - ```
      var uri = 'mongodb://localhost/mean';
      var db = require('mongoose').connect(uri);
    ``` 