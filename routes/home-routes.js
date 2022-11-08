const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', {
        loggedIn: false
    })
})

module.exports = router