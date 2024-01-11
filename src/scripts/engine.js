const state ={
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldCards: {
        player: document.getElementById("player=field-card"),
        computer: document.getElementById("computer=field-card"),
    },
    actions: {
        button: document.getElementById("next-duel"),
    },
   
};

const pathImages = ".src/assets/icons/";
const cardDate = [
    {
        id:0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
    },

]

function init() {

};

init();

