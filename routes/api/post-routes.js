const router = require('express').Router();
const {Post} = require('../../models');

router.post('/', async (req, res) => {
    try {
    const newPost = await Post.create(req.body)
    res.json(newPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/', async (req, res) => {
    try {
    Post.findAll()
    res.json(newPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;