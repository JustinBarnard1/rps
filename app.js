

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
                        <h2 class="text-center">Opponent</h2>
                        <img id="opponent" class="mt-1" src="./defaultImage.png" alt="">
                    </div>
                    <div class="mx-auto justify-content-center text-center"><h2 id="winner" class="mx-auto justify-content-center text-center"></h2></div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <img id="player" class="" src="./defaultImage.png" alt="">
                        <h2 class="mt-1 text-center">Player</h2>
                        <div class="mb-1"><button type="button"
                                class="btn bg-light text-dark mx-2 btn-width" onclick="whoWins('knight')">Knight</button><button type="button"
                                class="btn bg-light text-dark mx-2 btn-width" onclick="whoWins('wizard')">Wizard</button><button type="button"
                                class="btn bg-light text-dark mx-2 btn-width" onclick="whoWins('archer')">Archer</button>
                        </div>
                    </div>
                </div>
            </div>`

    document.getElementById('gameBoard').innerHTML = template

}
// function test() {
//     console.log("testing")
// }

function whoWins(action1) {
    let action2 = random()
    console.log(action1, action2)
    document.getElementById("opponent").innerHTML = action2
    document.getElementById("player").innerHTML = action1
    if (action1 === action2) {
        return document.getElementById("winner").innerText = "Tie";
    }
    else if (action1 === "knight") {
        if (action2 === "archer") {
            return document.getElementById("winner").innerText = "knight wins";
        }
        else if (action2 === "wizard") {
            return document.getElementById("winner").innerText = "wizard wins";
        }
    }
    else if (action1 === "wizard") {
        if (action2 === "archer") {
            return document.getElementById("winner").innerText = "archer wins";
        }
        else if (action2 === "knight") {
            return document.getElementById("winner").innerText = "wizard wins";
        }
    }
    else if (action1 === "archer") {
        if (action2 === "wizard") {
            return document.getElementById("winner").innerText = "archer win";
        }
        else if (action2 === "knight") {
            return document.getElementById("winner").innerText = "knight wins";
        }
    }
    draw()
}

function random() {
    let index = Math.floor(Math.random() * (actions.length - 0.01))
    let currentAction = actions[index].name
    return currentAction
}

function getStarted() {
    document.getElementById("welcome").remove();
    draw();
}