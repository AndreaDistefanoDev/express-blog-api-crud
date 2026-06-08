const express = require('express');
const app = express();
const port = 3000;
const posts = require('./data/posts');
const { post } = require('./routers/posts');

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});




app.use('/api/posts', postsRouter);
// INDEX
app.get('/api/posts', (req, res) => {

    res.json(posts);
});

// SHOW
app.get('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
});


