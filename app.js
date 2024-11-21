
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users_routes');
const postRoutes = require('./routes/post_routes');
const commentRoutes = require('./routes/comments_routes'); 
const friendshipRoutes = require('./routes/friendship_routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/RedSocial', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(err => console.error('Error de conexión:', err));

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de la red social');
});

app.use('/users', userRoutes);
app.use('/post', postRoutes);
app.use('/comments', commentRoutes);
app.use('/friendship', friendshipRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
