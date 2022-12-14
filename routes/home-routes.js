const router = require('express').Router();
const {User, Post, Comments} = require('../models');

router.get('/', async (req, res) => {
    try {
        const content = await Post.findAll({
            include: [{ 
              model: User,
              attributes: ['user_name']
            }]
        })
        console.log(content);
        res.render('home', {
            Post: content,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
});

router.get('/newpost', (req, res) => {
    if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    }
    res.render('newpost');
});

module.exports = router