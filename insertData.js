const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('RedSocial');
    const users = database.collection('users');
    const posts = database.collection('posts');
    const comments = database.collection('comments');
    const friendships = database.collection('friendships');

    // Insertar datos de users
    await users.insertMany([
        { "_id": "u001", "name": "Juan Perez", "email": "juan.perez@gmail.com", "birthdate": ISODate("1990-01-15T00:00:00Z"), "bio": "Amante de la tecnología.", "friends": ["u002", "u003"], "joined_at": ISODate("2024-01-15T00:00:00Z") },
        { "_id": "u002", "name": "Ana Gomez", "email": "ana.gomez@gmail.com", "birthdate": ISODate("1992-03-20T00:00:00Z"), "bio": "Entusiasta de los libros.", "friends": ["u001"], "joined_at": ISODate("2024-01-20T00:00:00Z") },
        { "_id": "u003", "name": "Carlos Ramirez", "email": "carlos.ramirez@gmail.com", "birthdate": ISODate("1988-07-10T00:00:00Z"), "bio": "Aficionado al deporte.", "friends": ["u001"], "joined_at": ISODate("2024-01-25T00:00:00Z") },
        { "_id": "u004", "name": "Maria Martinez", "email": "maria.martinez@gmail.com", "birthdate": ISODate("1991-08-25T00:00:00Z"), "bio": "Amante de los animales.", "friends": ["u005", "u006"], "joined_at": ISODate("2024-01-30T00:00:00Z") },
        { "_id": "u005", "name": "Jose Hernandez", "email": "jose.hernandez@gmail.com", "birthdate": ISODate("1993-11-12T00:00:00Z"), "bio": "Fanático de los videojuegos.", "friends": ["u004"], "joined_at": ISODate("2024-02-05T00:00:00Z") },
        { "_id": "u006", "name": "Laura Suarez", "email": "laura.suarez@gmail.com", "birthdate": ISODate("1995-04-05T00:00:00Z"), "bio": "Amante de la fotografía.", "friends": ["u004"], "joined_at": ISODate("2024-02-10T00:00:00Z") },
        { "_id": "u007", "name": "Daniel Rojas", "email": "daniel.rojas@gmail.com", "birthdate": ISODate("1994-01-15T00:00:00Z"), "bio": "Entusiasta de la música.", "friends": ["u008"], "joined_at": ISODate("2024-02-15T00:00:00Z") },
        { "_id": "u008", "name": "Patricia Ortega", "email": "patricia.ortega@gmail.com", "birthdate": ISODate("1992-09-10T00:00:00Z"), "bio": "Aficionada a la cocina.", "friends": ["u007"], "joined_at": ISODate("2024-02-20T00:00:00Z") },
        { "_id": "u009", "name": "Ricardo Fernandez", "email": "ricardo.fernandez@gmail.com", "birthdate": ISODate("1996-06-18T00:00:00Z"), "bio": "Amante de los autos.", "friends": ["u010"], "joined_at": ISODate("2024-02-25T00:00:00Z") },
        { "_id": "u010", "name": "Sandra Torres", "email": "sandra.torres@gmail.com", "birthdate": ISODate("1989-03-22T00:00:00Z"), "bio": "Fanática de la moda.", "friends": ["u009"], "joined_at": ISODate("2024-03-01T00:00:00Z") },
        { "_id": "u011", "name": "Fernando Gutierrez", "email": "fernando.gutierrez@gmail.com", "birthdate": ISODate("1990-12-11T00:00:00Z"), "bio": "Entusiasta de los viajes.", "friends": ["u012"], "joined_at": ISODate("2024-03-05T00:00:00Z") },
        { "_id": "u012", "name": "Gloria Paredes", "email": "gloria.paredes@gmail.com", "birthdate": ISODate("1991-11-30T00:00:00Z"), "bio": "Amante de la pintura.", "friends": ["u011"], "joined_at": ISODate("2024-03-10T00:00:00Z") },
        { "_id": "u013", "name": "Rafael Navarro", "email": "rafael.navarro@gmail.com", "birthdate": ISODate("1995-08-15T00:00:00Z"), "bio": "Fanático del cine.", "friends": ["u014"], "joined_at": ISODate("2024-03-15T00:00:00Z") },
        { "_id": "u014", "name": "Silvia Diaz", "email": "silvia.diaz@gmail.com", "birthdate": ISODate("1993-02-28T00:00:00Z"), "bio": "Aficionada al yoga.", "friends": ["u013"], "joined_at": ISODate("2024-03-20T00:00:00Z") },
        { "_id": "u015", "name": "Gabriel Sosa", "email": "gabriel.sosa@gmail.com", "birthdate": ISODate("1994-05-23T00:00:00Z"), "bio": "Entusiasta de la jardinería.", "friends": ["u016"], "joined_at": ISODate("2024-03-25T00:00:00Z") }
          
    ]);

    // Insertar datos de posts
    await posts.insertMany([
    
        { "_id": "p001", "user_id": "u001", "content": "¡Mi primer post en esta red social!", "type": "text", "created_at": ISODate("2024-01-20T00:00:00Z"), "reactions": [{"user_id": "u002", "reaction": "like"}] },
        { "_id": "p002", "user_id": "u002", "content": "¡Hola a todos!", "type": "text", "created_at": ISODate("2024-01-21T00:00:00Z"), "reactions": [{"user_id": "u001", "reaction": "love"}] },
        { "_id": "p003", "user_id": "u003", "content": "Disfrutando de un gran día en el parque.", "type": "image", "created_at": ISODate("2024-01-22T00:00:00Z"), "reactions": [{"user_id": "u004", "reaction": "like"}] },
        { "_id": "p004", "user_id": "u004", "content": "Nuevo video sobre cómo cuidar a tu mascota.", "type": "video", "created_at": ISODate("2024-01-23T00:00:00Z"), "reactions": [{"user_id": "u005", "reaction": "love"}] },
        { "_id": "p005", "user_id": "u005", "content": "¡Nuevo récord en mi juego favorito!", "type": "text", "created_at": ISODate("2024-01-24T00:00:00Z"), "reactions": [{"user_id": "u006", "reaction": "wow"}] },
        { "_id": "p006", "user_id": "u006", "content": "Foto de la última sesión de fotos que hice.", "type": "image", "created_at": ISODate("2024-01-25T00:00:00Z"), "reactions": [{"user_id": "u004", "reaction": "like"}] },
        { "_id": "p007", "user_id": "u007", "content": "Lista de reproducción favorita de este mes.", "type": "text", "created_at": ISODate("2024-01-26T00:00:00Z"), "reactions": [{"user_id": "u008", "reaction": "like"}] },
        { "_id": "p008", "user_id": "u008", "content": "Receta de pastel de chocolate casero.", "type": "image", "created_at": ISODate("2024-01-27T00:00:00Z"), "reactions": [{"user_id": "u007", "reaction": "love"}] },
        { "_id": "p009", "user_id": "u009", "content": "Mi coche favorito en la exposición.", "type": "image", "created_at": ISODate("2024-01-28T00:00:00Z"), "reactions": [{"user_id": "u010", "reaction": "wow"}] },
        { "_id": "p010", "user_id": "u010", "content": "Tendencias de moda para el próximo verano.", "type": "text", "created_at": ISODate("2024-01-29T00:00:00Z"), "reactions": [{"user_id": "u009", "reaction": "like"}] },
        { "_id": "p011", "user_id": "u011", "content": "Mis fotos de las vacaciones en Bali.", "type": "image", "created_at": ISODate("2024-01-30T00:00:00Z"), "reactions": [{"user_id": "u012", "reaction": "love"}] },
        { "_id": "p012", "user_id": "u012", "content": "Pintura terminada después de semanas de trabajo.", "type": "image", "created_at": ISODate("2024-02-01T00:00:00Z"), "reactions": [{"user_id": "u011", "reaction": "wow"}] },
        { "_id": "p013", "user_id": "u013", "content": "Opinión sobre la última película que vi.", "type": "text", "created_at": ISODate("2024-02-02T00:00:00Z"), "reactions": [{"user_id": "u014", "reaction": "like"}] },
        { "_id": "p014", "user_id": "u014", "content": "Posición de yoga que aprendí hoy.", "type": "image", "created_at": ISODate("2024-02-03T00:00:00Z"), "reactions": [{"user_id": "u013", "reaction": "love"}] },
        { "_id": "p015", "user_id": "u015", "content": "Mi jardín después de la primavera.", "type": "image", "created_at": ISODate("2024-02-04T00:00:00Z"), "reactions": [{"user_id": "u016", "reaction": "like"}] }
                
    ]);

    // Insertar datos de comments
    await comments.insertMany([
        
        { "_id": "c001", "post_id": "p001", "user_id": "u002", "content": "¡Qué emocionante! Felicidades por tu primer post.", "created_at": ISODate("2024-01-20T01:00:00Z") },
        { "_id": "c002", "post_id": "p002", "user_id": "u003", "content": "¡Hola Ana! Encantado de leerte.", "created_at": ISODate("2024-01-21T01:30:00Z") },
        { "_id": "c003", "post_id": "p003", "user_id": "u004", "content": "Hermosa foto del parque, Carlos!", "created_at": ISODate("2024-01-22T02:00:00Z") },
        { "_id": "c004", "post_id": "p004", "user_id": "u005", "content": "Gracias por los consejos para mascotas!", "created_at": ISODate("2024-01-23T02:30:00Z") },
        { "_id": "c005", "post_id": "p005", "user_id": "u006", "content": "¡Increíble puntuación, José! ¿Algún truco?", "created_at": ISODate("2024-01-24T03:00:00Z") },
        { "_id": "c006", "post_id": "p006", "user_id": "u004", "content": "Tus fotos siempre son impresionantes, Laura.", "created_at": ISODate("2024-01-25T03:30:00Z") },
        { "_id": "c007", "post_id": "p007", "user_id": "u008", "content": "Me encanta tu selección de música!", "created_at": ISODate("2024-01-26T04:00:00Z") },
        { "_id": "c008", "post_id": "p008", "user_id": "u007", "content": "¡Esa receta se ve deliciosa, Patricia!", "created_at": ISODate("2024-01-27T04:30:00Z") },
        { "_id": "c009", "post_id": "p009", "user_id": "u010", "content": "¡Vaya coche impresionante!", "created_at": ISODate("2024-01-28T05:00:00Z") },
        { "_id": "c010", "post_id": "p010", "user_id": "u009", "content": "Las tendencias de moda están increíbles.", "created_at": ISODate("2024-01-29T05:30:00Z") },
        { "_id": "c011", "post_id": "p011", "user_id": "u012", "content": "Bali es un destino soñado, tus fotos son geniales!", "created_at": ISODate("2024-01-30T06:00:00Z") },
        { "_id": "c012", "post_id": "p012", "user_id": "u011", "content": "Tu pintura es maravillosa, Gloria!", "created_at": ISODate("2024-02-01T06:30:00Z") },
        { "_id": "c013", "post_id": "p013", "user_id": "u014", "content": "¡Esa película suena interesante, Rafael!", "created_at": ISODate("2024-02-02T07:00:00Z") },
        { "_id": "c014", "post_id": "p014", "user_id": "u013", "content": "¡Gran postura de yoga, Silvia!", "created_at": ISODate("2024-02-03T07:30:00Z") },
        { "_id": "c015", "post_id": "p015", "user_id": "u016", "content": "Tu jardín está precioso, Gabriel.", "created_at": ISODate("2024-02-04T08:00:00Z") }
                 
    ]);

    // Insertar datos de friendships
    await friendships.insertMany([
        { "_id": "f001", "user_1": "u001", "user_2": "u002", "status": "accepted", "updated_at": ISODate("2024-01-16T00:00:00Z") },
        { "_id": "f002", "user_1": "u001", "user_2": "u003", "status": "accepted", "updated_at": ISODate("2024-01-17T00:00:00Z") },
        { "_id": "f003", "user_1": "u002", "user_2": "u004", "status": "accepted", "updated_at": ISODate("2024-01-18T00:00:00Z") },
        { "_id": "f004", "user_1": "u002", "user_2": "u005", "status": "pending", "updated_at": ISODate("2024-01-19T00:00:00Z") },
        { "_id": "f005", "user_1": "u003", "user_2": "u006", "status": "accepted", "updated_at": ISODate("2024-01-20T00:00:00Z") },
        { "_id": "f006", "user_1": "u003", "user_2": "u007", "status": "accepted", "updated_at": ISODate("2024-01-21T00:00:00Z") },
        { "_id": "f007", "user_1": "u004", "user_2": "u008", "status": "accepted", "updated_at": ISODate("2024-01-22T00:00:00Z") },
        { "_id": "f008", "user_1": "u004", "user_2": "u009", "status": "pending", "updated_at": ISODate("2024-01-23T00:00:00Z") },
        { "_id": "f009", "user_1": "u005", "user_2": "u010", "status": "accepted", "updated_at": ISODate("2024-01-24T00:00:00Z") },
        { "_id": "f010", "user_1": "u005", "user_2": "u011", "status": "accepted", "updated_at": ISODate("2024-01-25T00:00:00Z") },
        { "_id": "f011", "user_1": "u006", "user_2": "u012", "status": "pending", "updated_at": ISODate("2024-01-26T00:00:00Z") },
        { "_id": "f012", "user_1": "u006", "user_2": "u013", "status": "accepted", "updated_at": ISODate("2024-01-27T00:00:00Z") },
        { "_id": "f013", "user_1": "u007", "user_2": "u014", "status": "accepted", "updated_at": ISODate("2024-01-28T00:00:00Z") },
        { "_id": "f014", "user_1": "u007", "user_2": "u015", "status": "pending", "updated_at": ISODate("2024-01-29T00:00:00Z") },
        { "_id": "f015", "user_1": "u008", "user_2": "u001", "status": "accepted", "updated_at": ISODate("2024-01-30T00:00:00Z") }
          
          
    ]);

    console.log("Datos insertados exitosamente");

  } finally {
    await client.close();
  }
}

main().catch(console.error);
