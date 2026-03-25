import { Router } from 'express';
import { getUsers, createUser, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
import { body, validationResult } from 'express-validator';

// Reglas de validación
const userValidationRules = [
  body('nombre').trim().notEmpty().withMessage('El nombre es obligatorio'),
  body('email').trim().isEmail().withMessage('Debe proporcionar un email válido'),
];

// Middleware para verificar resultados de validación
function checkValidation(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errores: errors.array() });
  next();
}

const router = Router();

// GET /users
router.get('/', getUsers);

// POST /users (con validaciones)
router.post('/', userValidationRules, checkValidation, createUser);

// GET /users/:id
router.get('/:id', getUserById);

// PUT /users/:id
router.put('/:id', userValidationRules, checkValidation, updateUser);

// DELETE /users/:id
router.delete('/:id', deleteUser);

export default router;