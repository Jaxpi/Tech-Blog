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
        res.render('home', {
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

module.exports = router