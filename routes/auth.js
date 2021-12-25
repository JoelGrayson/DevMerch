const router=require('express').Router();
const User=require('../models/User');

//register routes
router.post('/register', async (req, res)=>{
    const newUser=new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    try {
        let result=await newUser.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});
router.post('/login', async (req, res)=>{
    try {
        const user=await User.findOne({username: req.body.username, password: req.body.password});
        if (!user) //No user exists for credentials
            res.status(401).json('Wrong credentials');
        else
            res.status(200).json(`Logged in as ${user.username}`);
        
    } catch (err) {
        res.status(500).json({message: err.message});
    }

});

module.exports=router;