'use strict'

const Card = require('../model/card');

const cardService = {

    findByUserId: function(userId) {

        return Card.find({userId: userId }, (err,card) => {
            if (!card.length) return null;

            if (err){
                console.log(err);
                return null;
            };
            return card;
        } );
    },
    saveCard: function(cardStoraged) {

       return this.findByUserId(cardStoraged.userId)
       .then(data => {
           if (data.length){
            cardStoraged.primary = false;
           }else{
            cardStoraged.primary = true;
           }
           return cardStoraged.save();
       });
    
    }

}

module.exports = cardService;