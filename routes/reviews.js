const express = require('express');
const router = express.Router({ mergeParams: true });

/**
 * Get reviews index /posts/:id/reviews
 */
router.get('/', (req, res) => {
  res.send('hello reviews');
});

/**
 * POST new reviews /posts/:id/reviews/
 */
router.post('/', (req, res) => {
  res.send('/posts/:id/reviews');
});

/**
 * GET edit post /posts/:id/reviews/:reviews_id/edit
 */
router.get('/:reviews_id/edit', (req, res) => {
  res.send('/posts/:id/reviews/:reviews_id/edit');
});

/**
 * PUT edit post /posts/:id/reviews/:reviews_id
 */
router.put('/:reviews_id', (req, res) => {
  res.send('/posts/:id/reviews/:reviews_id');
});

/**
 * DELETE post /posts/:id/reviews/:reviews_id
 */
router.delete('/:reviews_id', (req, res) => {
  res.send('/posts/:id/reviews/:reviews_id');
});

module.exports = router;
