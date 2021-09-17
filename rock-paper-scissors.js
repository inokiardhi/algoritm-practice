
//  *input -> janken("rock")
//  * output -> rock against paper - you lose
//  * input -> janken("nuclear")
//  * output -> nuclear is not part of the game!
//  * input -> janken(1)
//  * input -> please input rock, paper, or scissors only

const lawan = () => {
    const option = ["rock", "paper", "scissor"]
    return (option[Math.floor(Math.random()*3)])
    
}


const janken = (suit, lawan) => {
    if (suit === Number) {
        return "please input rock, paper, or scissors only";
    } else if (suit === "rock" ||  "paper" || "scissor") {
        if(suit === lawan) {
            return "draw";
        };
        switch (lawan) {
            case "rock":
                if(suit === "paper") {
                    return `${suit} Vs rock - You Win`;
                } else if (suit == "scissor") {
                    return `${suit} Vs rock - You Lose`;
                };
            case "paper":
                if(suit === "rock") {
                    return `${suit} Vs paper - You Lose`;
                } else if(suit === "scissor"){
                    return `${suit} Vs paper - You Win`;
                };
            case "scissor":
                if(suit === "rock") {
                    return `${suit} Vs scissor - You Win`;
                } else if(suit === "paper"){
                    return `${suit} Vs scissor - You Lose`;
                };
        }
    }
    else {
        return `${suit} is not part of the game!`;
    };
};

console.log(janken("paper", lawan()));


