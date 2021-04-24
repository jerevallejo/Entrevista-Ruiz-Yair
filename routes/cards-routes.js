'use strinct'

const express = require('express');
const CardsController = require('../controller/cards-controller');


const router = express.Router();

router.post("/creditcard", CardsController.postCard);
router.get("/creditcard:userId?", CardsController.getCard);


module.exports= router;

