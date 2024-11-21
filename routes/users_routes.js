
const express = require('express');
const User = require('../models/user'); 

const router = express.Router();

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  const { name, email, birthdate, bio, friends, joined_at } = req.body;
  try {
    const newUser = new User({ name, email, birthdate, bio, friends, joined_at });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Actualizar un usuario por ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, birthdate, bio, friends, joined_at } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, { name, email, birthdate, bio, friends, joined_at }, { new: true });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar un usuario por ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'Usuario eliminado exitosamente' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


module.exports = router;
