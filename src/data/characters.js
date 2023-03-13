var characters = [
    {
        id: 1,
        name: "Miðgarðsormr",
        avatar: "dragonidebarbaro.webp",
        race:"dragonide",
        class:"barbaro",
        gender:"maschio",
        background:"eremita",
    },
    {
        id: 2,
        name: "Jog",
        avatar: "changeling.webp",
        race:"changeling",
        class:"paladino",
        gender:"maschio",
        background:"accolito"
    },
    {
        id: 3,
        name: "Duolingo",
        avatar: "duolingomacho.webp",
        race:"kenku",
        class:"barbaro",
        gender:"maschio",
        background:"saggio"
    },
    {
        id: 4,
        name: "Gatto con gli stivali",
        avatar: "gatitoconglistivali.jpg",
        race:"gatto",
        class:"paladino",
        gender:"maschio",
        background:"ladro",
        descrizione: "E' un abile spadaccino e agile come ogni altro felino. Riesce ad abbassare la guardia di ogni avversario grazie ai suoi grandi occhi verdi. Gatto è considerato da molti un ladro e mascalzone; in realtà, vive le sue avventure seguendo ferree regole morali di cavalleria, ed è un abile donnaiolo."
    },
    {
        id: 5,
        name: "Predator",
        avatar: "predator.webp",
        race:"alieno",
        class:"guerriero",
        gender:"maschio",
        background:"eremita"
    },
];

characters = characters.map( character => {
    return {
        ...character,
        avatar: "/imgs/characters/" + character.avatar
    }
})

export { characters };