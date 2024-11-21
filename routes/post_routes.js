// routes/posts.js
const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Crear una nueva publicación
router.post('/', async (req, res) => {
  const { user_id, content, type, created_at, reactions } = req.body;
  try {
    const newPost = new Post({ user_id, content, type, created_at, reactions });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todas las publicaciones
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Actualizar una publicación por ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { user_id, content, type, created_at, reactions } = req.body;
    try {
      const updatedPost = await Post.findByIdAndUpdate(id, { user_id, content, type, created_at, reactions }, { new: true });
      res.status(200).json(updatedPost);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Eliminar una publicación por ID
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await Post.findByIdAndDelete(id);
      res.status(200).json({ message: 'Publicación eliminada exitosamente' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  

module.exports = router;
