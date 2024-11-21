// routes/comments.js

const express = require('express');
const Comment = require('../models/Comments');
const router = express.Router();

// Crear un nuevo comentario
router.post('/', async (req, res) => {
  const { post_id, user_id, content, created_at } = req.body;
  try {
    const newComment = new Comment({ post_id, user_id, content, created_at });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todos los comentarios
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Actualizar un comentario por ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { post_id, user_id, content, created_at } = req.body;
    try {
      const updatedComment = await Comment.findByIdAndUpdate(id, { post_id, user_id, content, created_at }, { new: true });
      res.status(200).json(updatedComment);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Eliminar un comentario por ID
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await Comment.findByIdAndDelete(id);
      res.status(200).json({ message: 'Comentario eliminado exitosamente' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  

module.exports = router;
