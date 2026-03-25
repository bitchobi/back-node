// "Base de datos" en memoria
let users = [
  { id: 1, nombre: 'Fabricio', email: 'fabbro@idt.com' }
];

// Función para generar IDs
function generateId() {
  return users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
}

// GET /users
export function getUsers(req, res) {
  res.json(users);
}

// POST /users
export function createUser(req, res) {
  const { nombre, email } = req.body;
  const newUser = {
    id: generateId(),
    nombre,
    email,
  };
  users.push(newUser);
  res.status(201).json({
    mensaje: 'Usuario creado',
    usuario: newUser,
  });
}

// GET /users/:id
export function getUserById(req, res) {
  const { id } = req.params;
  const user = users.find(u => u.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(user);
}

// PUT /users/:id
export function updateUser(req, res) {
  const { id } = req.params;
  const { nombre, email } = req.body;

  const userIndex = users.findIndex(u => u.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  users[userIndex].nombre = nombre;
  users[userIndex].email = email;

  res.json({
    mensaje: 'Usuario actualizado',
    usuario: users[userIndex],
  });
}

// DELETE /users/:id
export function deleteUser(req, res) {
  const { id } = req.params;
  const userIndex = users.findIndex(u => u.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  const deleted = users.splice(userIndex, 1);
  res.json({
    mensaje: 'Usuario eliminado',
    usuario: deleted[0],
  });
}