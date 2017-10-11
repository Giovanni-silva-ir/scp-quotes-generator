'use strict';

const express = require('express')
, router = express.Router()

router.get('/:ativo', function(req, res) {
    let ativo = req.params.ativo;
    let basePrice = ((Math.random() * 55)+1);

    let side = randomIntFromInterval(1, 10) >5;
    let open = side? basePrice + randomIntFromInterval(1,5):basePrice + randomIntFromInterval(1,5);
    let close = side? basePrice + randomIntFromInterval(1,5):basePrice + randomIntFromInterval(1,5);

    let quote = {
        symbol: ativo,
        minimum: Math.abs(basePrice - randomIntFromInterval(1, 10)),
        maximum: Math.abs(basePrice + randomIntFromInterval(1, 10)),
        open: Math.abs(open),
        close: Math.abs(close)  
    };

    res.send(quote);
});

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

module.exports = router