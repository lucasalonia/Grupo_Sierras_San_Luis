const express = require("express");
const router = express.Router();

router.get('/eventosPrincipal', (req,res)=>{
    res.render('eventos/eventosPrincipal');

});


module.exports = router;