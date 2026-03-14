export const titleData = {
    title: true,
    selectable: true,
    question: null,
    options: [
        {
            key: 1,
            prompt: "Drive the trail",
            dest: "gameStart"
        },
        {
            key: 2,
            prompt: "Read the lore",
            dest: "lore"
        },
        {
            key: 3,
            prompt: "How the game works",
            dest: "tutorial"
        }
    ],
    text: [],
    tooltip: null
}

export const loreData = {
    title: true,
    selectable: false,
    question: null,
    options: [],
    text: [
        `It all starts in January 15, 1979. A Soviet experiment 
        in Warsaw got out of containment and spread accross Europe. 
        But on July 4, 1980, the zombie virus landed in eastern United States.`
    ],
    tooltip: "Press SPACE BAR to continue"
}