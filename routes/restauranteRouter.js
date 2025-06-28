const express = require("express");
const router = express.Router();

router.get('/restaurantePrincipal', (req,res)=>{
    res.render('restaurante/restaurantePrincipal');

});


module.exports = router;