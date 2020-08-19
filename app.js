

actions = [
    {
        name: "knight",
        type: "rock",
        img: "./knight.png",
        value: 1
    },
    {
        name: "wizard",
        type: "paper",
        img: "./wizard.png",
        value: 2
    },
    {
        name: "archer",
        type: "scissors",
        img: "./archer.png",
        value: 3
    }
]
function draw() {
    let template = document.getElementById('gameBoard')
    template += `
            <div class="">
                <div class="row row-height">
                    <div class="col-12 text-center">
                        <h2 class="mt-3 text-center">Opponent</h2>
                        <img class="mt-2" src="./defaultImage.png" alt="">
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <img class="" src="./defaultImage.png" alt="">
                        <h2 class="mt-2 text-center">Player</h2>
                        <div class="mb-2"><button type="button" name="" id=""
                                class="btn bg-light text-dark mx-2 btn-width">Rock</button><button type="button" name=""
                                id="" class="btn bg-light text-dark mx-2 btn-width">Paper</button><button type="button"
                                name="" id="" class="btn bg-light text-dark mx-2 btn-width">Scissors</button>
                        </div>
                    </div>
                </div>
            </div>`

    document.getElementById('gameBoard').innerHTML = template
}

function whoWins(action1, action2) {
    if (action1 === action2) {
        return "Tie";
    }
    else if (action1 === "knight") {
        if (action2 === "archer") {
            return "knight wins"
        }
        else if (action2 === "wizard") {
            return "wizard wins";
        }
    }
    else if (action1 === "wizard") {
        if (action2 === "archer") {
            return "archer wins"
        }
        else if (action2 === "knight") {
            return "wizard wins";
        }
    }
    else if (action1 === "archer") {
        if (action2 === "wizard") {
            return "archer win"
        }
        else if (action2 === "knight") {
            return "knight wins";
        }
    }

}

function random() {
    let index = math.floor(math.random() * (actions.length - 0.01))
    let currentAction = actions[index]
    deploy(currentAction)
}

function getStarted() {
    document.getElementById("welcome").remove();
    draw();
}