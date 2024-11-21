# Red Social - Base de Datos

## Descripción

Este proyecto implementa la base de datos de una red social utilizando MongoDB. La base de datos está diseñada para gestionar usuarios, publicaciones, comentarios y amistades. Se incluyen scripts para poblar la base de datos con datos iniciales y ejemplos de consultas CRUD (Crear, Leer, Actualizar, Eliminar).

## Estructura del Proyecto

red_social_db/
|-- models/
| |-- User.js
| |-- Post.js
| |-- Comment.js
| |-- Friendship.js
|-- routes/
| |-- users.js
| |-- posts.js
| |-- comments.js
| |-- friendships.js
|-- insertData.js
|-- package.json
|-- README.md

```

## Requisitos

- Node.js y npm instalados.
- Mongoose instalado
- MongoDB instalado y en ejecución.

## Instalación

### Clonar el Repositorio

Primero, clona el repositorio del proyecto a tu máquina local.


git clone https://github.com/scereda2/final_basedeDatos3.git


### Instalar Dependencias

Navega a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:


***npm install***


## Configuración

Asegúrate de que MongoDB está instalado y en ejecución en tu máquina. El script de inserción de datos se conecta a una instancia local de MongoDB en `mongodb://localhost:27017`.

## Ejecución

### Poblar la Base de Datos

Ejecuta el script `insertData.js` para poblar la base de datos `red_social` con los datos iniciales.

```

node insertData.js

````

### Consultas CRUD Básicas

Aquí se incluyen algunos ejemplos de consultas CRUD que se pueden realizar en la base de datos.

#### Crear un nuevo usuario

```javascript
db.users.insertOne({
  "_id": "u016",
  "name": "Lucia Fernandez",
  "email": "lucia.fernandez@gmail.com",
  "birthdate": ISODate("1994-05-15T00:00:00Z"),
  "bio": "Amante del cine independiente.",
  "friends": ["u001", "u002"],
  "joined_at": ISODate("2024-02-15T00:00:00Z")
})
````

#### Leer todos los usuarios

```javascript
db.users.find().pretty();
```

#### Actualizar un usuario específico

```javascript
db.users.updateOne(
  { _id: "u001" },
  {
    $set: {
      bio: "Amante de la tecnología y la ciencia ficción.",
    },
  }
);
```

#### Eliminar un usuario específico

```javascript
db.users.deleteOne({ _id: "u016" });
```

## Información Adicional

### Estrategia de Inserción

Se han utilizado datos ficticios que representan un entorno realista de red social. Los datos incluyen perfiles de usuarios, publicaciones variadas, comentarios y relaciones de amistad. La inserción se realiza en lotes utilizando el comando `insertMany` para cada colección.

### Estructura de los Datos

**Usuarios (`users`):**

```json
{
  "_id": "u001",
  "name": "Juan Perez",
  "email": "juan.perez@gmail.com",
  "birthdate": "1990-01-15T00:00:00Z",
  "bio": "Amante de la tecnología.",
  "friends": ["u002", "u003"],
  "joined_at": "2024-01-15T00:00:00Z"
}
```

**Publicaciones (`posts`):**

```json
{
  "_id": "p001",
  "user_id": "u001",
  "content": "¡Mi primer post en esta red social!",
  "type": "text",
  "created_at": "2024-01-20T00:00:00Z",
  "reactions": [{ "user_id": "u002", "reaction": "like" }]
}
```

**Comentarios (`comments`):**

```json
{
  "_id": "c001",
  "post_id": "p001",
  "user_id": "u002",
  "content": "¡Qué emocionante! Felicidades por tu primer post.",
  "created_at": "2024-01-20T01:00:00Z"
}
```

**Amistades (`friendships`):**

```json
{
  "_id": "f001",
  "user_1": "u001",
  "user_2": "u002",
  "status": "accepted",
  "updated_at": "2024-01-16T00:00:00Z"
}
```
