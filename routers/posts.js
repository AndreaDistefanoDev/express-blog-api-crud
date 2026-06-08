const express = require('express');
const router = express.Router();
const posts = require('../data/posts');

// INDEX
router.get('/', (req, res) => {
    const tag = req.query.tag;

    if (tag) {

        const filteredPosts = posts.filter(post =>
            post.tags.map(tag => tag.toLowerCase()).includes(tag.toLowerCase())
        );
        return res.json(filteredPosts);
    }
    res.json(posts);
});

// SHOW
router.get('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const thisPost = posts.find(post => post.id === postId);

    if (!thisPost) {
        return res.status(404).json({ error: true, message: 'Post not found' });
    }

    res.json(post);
});




module.exports = router;