const express = require("express");
const router = express.Router();

router.get('/contactoPrincipal', (req,res)=>{
    res.render('contacto/contactoPrincipal');

});


module.exports = router;