const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const isAuth = require('../middleware/isAuth');

router.post('/register', register);
router.post('/login', login);

// Ruta protegida
router.get('/protected', isAuth, (req, res) => {
  res.json({
    message: 'Acceso concedido a ruta privada',
    user: req.user
  });
});

module.exports = router;