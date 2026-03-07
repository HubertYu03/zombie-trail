import { titleData } from "../data/optionData"

const choice = document.getElementById("choice")
const title = document.getElementById("title")
const question = document.getElementById("question")
const options = document.getElementById("options")

function loadGame() {
    for (const op of titleData.options) {
        const li = document.createElement("li")
        li.textContent = op.prompt
        options.appendChild(li)
    }
}

function loadUI(key) {

}

choice.addEventListener("keydown", (event) => {
    let input = choice.value

    if (input && event.key == "Enter") {

    }
})

loadGame()