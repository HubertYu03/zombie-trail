import { optionData } from "../data/optionData"

const choice = document.getElementById("choice")
const title = document.getElementById("title")
const question = document.getElementById("question")
const youMay = document.getElementById("you-may")
const options = document.getElementById("options")

let currentData;

function loadGame() {
    currentData = optionData["title"]

    for (const op of currentData.options) {
        const li = document.createElement("li")
        li.textContent = op.prompt
        options.appendChild(li)
    }
}

function loadUI() {
    clearUI()

    question.textContent = currentData.text
}

function clearUI() {
    youMay.textContent = ""
    options.innerHTML = ""
}

choice.addEventListener("keydown", (event) => {
    let input = choice.value

    if (input && event.key == "Enter") {
        console.log("Test");

        const destination = currentData.options[input - 1].dest
        currentData = optionData[destination]

        loadUI()
        choice.value = null
    }
})

loadGame()