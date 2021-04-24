'use strict'

const Card = require('../model/card');
const CardService = require('../service/cardService');

let controller = { 
    getCard: function(req, res){

        let userid = req.query.userId;

        CardService.findByUserId(userid)
        .then( cards =>{
            if (!cards) return res.status(404).send({
                message: "card not found"
            });

            return res.status(200).send({
                messsge: "data retrieved succesfully",
                data: cards
            })

        });
    },
    postCard: function(req, res) {

        let card = new Card();   
        let params = req.body;
        card.userId = params.userId;
        card.cardToken = params.cardToken;
        card.brandType = params.brandType;
        card.maskedNumber = params.maskedNumber;

        CardService.saveCard(card)
        .then( savedCard => {

            if (!savedCard) return res.status(404).send({message: 'Unable to storage data'});

            return res.status(200).send(
                {message:"card created successfuly",
            card: savedCard});

        });
    }
}

module.exports = controller;