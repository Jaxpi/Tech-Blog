const router = require('express').Router();
const {User} = require('../../models');

router.post('/', async (req, res) => {
    try {
    const newUser = await User.create(req.body)
    req.session.save( () => {
        req.session.user_id = newUser.id;
        req.session.user_name = newUser.user_name;
        req.session.loggedIn = true;
        res.json(newUser)
    })
    } catch (err) {
        res.status(500).json(err)
    }
})

//post route to log in - un and pw - then direct to dash or login again

module.exports = router;