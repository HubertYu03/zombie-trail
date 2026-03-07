import { titleOptions } from "../data/options"

const choice = document.getElementById("choice")
const title = document.getElementById("title")
const question = document.getElementById("question")
const options = document.getElementById("options")

function startGame() {
    for (const op of titleOptions.options) {

    }
}

choice.addEventListener("keydown", (event) => {
    let input = choice.value

    if (input && event.key == "Enter") {
        title.textContent = ""

        if (input == "1") {
            question.textContent = "Who were you before the outbreak?"
        } else if (input == "2") {
            question.textContent = "After a freak accident in a lab, in 1983 there"
        }
    }
})