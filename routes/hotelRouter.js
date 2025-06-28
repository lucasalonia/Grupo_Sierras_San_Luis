const express = require("express");
const router = express.Router();

router.get('/hotelPrincipal', (req,res)=>{
    res.render('hotel/hotelPrincipal');

});
router.get('/habitaciones', (req,res)=>{
    res.render('hotel/hotelHabitaciones');

});


module.exports = router;