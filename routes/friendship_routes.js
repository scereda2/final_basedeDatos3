// routes/friendships.js

const express = require('express');
const Friendship = require('../models/Friendship');
const router = express.Router();

// Crear una nueva amistad
router.post('/', async (req, res) => {
  const { user_1, user_2, status, updated_at } = req.body;
  try {
    const newFriendship = new Friendship({ user_1, user_2, status, updated_at });
    await newFriendship.save();
    res.status(201).json(newFriendship);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todas las amistades
router.get('/', async (req, res) => {
  try {
    const friendships = await Friendship.find();
    res.status(200).json(friendships);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar una amistad por ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { user_1, user_2, status, updated_at } = req.body;
  try {
    const updatedFriendship = await Friendship.findByIdAndUpdate(id, { user_1, user_2, status, updated_at }, { new: true });
    res.status(200).json(updatedFriendship);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar una amistad por ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Friendship.findByIdAndDelete(id);
    res.status(200).json({ message: 'Amistad eliminada exitosamente' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
