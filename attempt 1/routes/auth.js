const router=require('express').Router();
const User=require('../models/User');
const jwt=require('jsonwebtoken');

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
        else {
            const accessToken = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: "3d"}); //3 days
            
            // res.status(200).json(`Logged in as ${user.username}`);
            let userWithoutPassword={...user}; //copy object
            delete userWithoutPassword.password; //remove password attribute

            res.status(200).json({accessToken, ...userWithoutPassword}); //returns user attributes and accessToken
        }
        
    } catch (err) {
        res.status(500).json({message: err.message});
    }

});

module.exports=router;