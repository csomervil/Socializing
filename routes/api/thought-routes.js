const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts

router
  .route('/').get(getAllThoughts);

// Using: /api/thoughts/:id
router
  .route('/:id').get(getThoughtById).put(updateThought);

router
  .route('/:userId').post(createThought)
   
// /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions').post(createReaction);

router
  .route('/:userId/:thoughtId').delete(deleteThought);

router.route('/:userId/:thoughtId/:reactionId').delete(deleteReaction);

module.exports = router;
