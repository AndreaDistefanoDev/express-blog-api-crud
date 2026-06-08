const express = require('express');
const app = express();
const port = 3000;
const posts = require('./data/posts');

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.get('/api/posts', (req, res) => {

    res.json(posts);
});

app.get('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);


});

