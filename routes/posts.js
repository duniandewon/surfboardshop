const express = require('express');
const router = express.Router();

/**
 * Get posts index /posts
 */
router.get('/', (req, res) => {
  res.send('hello');
});

/**
 * Get new posts /posts/new
 */
router.get('/new', (req, res) => {
  res.send('/posts/new');
});

/**
 * POST new posts /posts/
 */
router.post('/', (req, res) => {
  res.send('/posts');
});

/**
 * GET post /posts/:id
 */
router.get('/:id', (req, res) => {
  res.send('/posts/:id');
});

/**
 * GET edit post /posts/:id/edit
 */
router.get('/:id/edit', (req, res) => {
  res.send('/posts/:id/edit');
});

/**
 * PUT edit post /posts/:id
 */
router.put('/:id', (req, res) => {
  res.send('/posts/:id');
});

/**
 * DELETE post /posts/:id
 */
router.delete('/:id', (req, res) => {
  res.send('/posts/:id');
});

module.exports = router;
