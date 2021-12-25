require('dotenv').config();
const router = require('express').Router();
let verifyToken=require('./verifyToken').verifyToken;

router.post('/userposttest', (req, res) => {
    const username = req.body.username;
    console.log(username);
    res.send(`Successfully added ${username}`);
});

router.put('/:id', verifyToken, (req, res) => {
    if (req.user.id===req.params.id)
        ;
    if (req.body.password===req.body.password)
        ;
});


module.exports = router;
