const router = require('express').Router();

router.get('/usertest', (req, res) => {
    console.log(`User test`);
    res.send(`Success from usertest`);
});

router.post('userposttest', (req, res) => {
    const username = req.body.username;
    console.log(username);
});

module.exports = router;
