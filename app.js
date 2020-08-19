actions = [
    {
        rock: "rock",
        img: '//placehold.it/250x250'
    },
    {
        paper: "paper",
        img: '//placehold.it/250x250'
    },
    {
        scissors: "scissors",
        img: '//placehold.it/250x250'
    }
]
function draw() {
    // let template = ""
    // actions.forEach(action => {
    //     template +=

    //template here
    //})
    // document.getElementById().innerHTML = template
}

function random() {
    let index = math.floor(math.random() * (actions.length - 0.01))
    let currentAction = actions[index]
    deply(currentAction)
}