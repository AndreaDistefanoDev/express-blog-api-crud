const posts = require('../data/posts');

const index = (req, res) => {
    const tag = req.query.tag;

    if (tag) {

        const filteredPosts = posts.filter(post =>
            post.tags.map(tag => tag.toLowerCase()).includes(tag.toLowerCase())
        );
        return res.json(filteredPosts);
    }
    res.json(posts);
}

const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const thisPost = posts.find(post => post.id === postId);

    if (!thisPost) {
        return res.status(404).json({ error: true, message: 'Post not found' });
    }

    res.json(thisPost);
}

const store = (req, res) => {
    res.json({ message: 'Post created successfully' });
}

const update = (req, res) => {
    res.json({ message: 'Post updated successfully' });
}

const modify = (req, res) => {
    res.json({ message: 'Post modified successfully' });
}

const destroy = (req, res) => {

    const postId = parseInt(req.params.id);
    const thisPost = posts.find(post => post.id === postId);

    if (!thisPost) {
        return res.status(404).json({ error: true, message: 'Post not found' });
    }

    const postIndex = posts.indexOf(thisPost);
    posts.splice(postIndex, 1);
    res.json({ message: 'Post deleted successfully' });
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
};