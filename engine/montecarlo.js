const { createDeck } = require("./deck")
const { shuffle } = require("./shuffle")
const { evaluate } = require("./handEvaluator")

function simulate(hand, board, iterations = 5000){

    const hero = hand.split(" ")
    const boardCards = board ? board.split(" ") : []

    let win = 0
    let tie = 0

    for(let i=0;i<iterations;i++){

        const deck = createDeck()

        const used = [...hero,...boardCards]

        const remaining = deck.filter(c=>!used.includes(c))

        shuffle(remaining)

        const villain = [remaining.pop(),remaining.pop()]

        const fullBoard = [...boardCards]

        while(fullBoard.length < 5){
            fullBoard.push(remaining.pop())
        }

        const heroScore = evaluate([...hero,...fullBoard])
        const villainScore = evaluate([...villain,...fullBoard])

        if(heroScore > villainScore) win++
        else if(heroScore === villainScore) tie++

    }

    const winRate = (win + tie*0.5)/iterations

    return winRate

}

module.exports = { simulate }