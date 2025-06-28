const express = require("express");
const router = express.Router();

router.get('/clubPrincipal', (req,res)=>{
    res.render('club/clubPrincipal');

});


module.exports = router;