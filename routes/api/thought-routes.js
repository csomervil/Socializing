const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts

router
  .route('/').get(getAllThoughts).post(createThought);

// Using: /api/thoughts/:id
router
  .route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .put(createReaction)
  .delete(removeReaction);

module.exports = router;