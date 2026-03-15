const suits = ["s", "h", "d", "c"]
const ranks = ["2","3","4","5","6","7","8","9","T","J","Q","K","A"]

function createDeck(){

    const deck = []

    for(const suit of suits){
        for(const rank of ranks){
            deck.push(rank + suit)
        }
    }

    return deck
}

module.exports = { createDeck }