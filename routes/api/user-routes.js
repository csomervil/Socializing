const router = require('express').Router();
const {
  // CRUD OPERATIONS
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/').get(getAllUsers).post(createUser);

// Using: /api/users/:id
router
  .route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
