import { characters } from "./characters.js";

const title = document.querySelector("h1");
const randomButton = document.querySelector(".random-button");
// const cardContainer = document.querySelector("#card-container")
const cardContainer = document.getElementById("card-container");

document.addEventListener("DOMContentLoaded", () => {
    title.textContent = "Dragon Ball Character Cards";
    title.className = "title";
    title.id = "main-title";
    title.classList.add("main-title");

    randomButton.textContent = "Choose A Random Card";

    characters.map((character) => createCard(character));

    randomButton.addEventListener("click", () => chooseRandomCard());
});

const createCard = (character) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
        <div class="inner-container">
            <div class="images">
                <img
                    class="background"
                    src="${character.background}"
                />
                <img
                    class="character"
                    src="${character.fighter}"
                />
            </div>
            <div class="info">
                <h2>${character.name}</h2>
                <span class="super-move">Super Move: ${character.superMove}</span>
                <div class="stats">
                    <span>Strength: ${character.strength}</span>
                    <span>Speed: ${character.speed}</span>
                    <span>Energy: ${character.energy}</span>
                    <span>Defense: ${character.defense}</span>
                </div>
            </div>
        </div>
    `;

    cardContainer.appendChild(div);
};

const chooseRandomCard = () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => card.classList.remove("chosen"));

    let currentIndex = 0;
    const totalCycles = 15;
    let cycleCount = 0;

    const interval = setInterval(() => {
        cards[currentIndex].classList.remove("cycling");
        currentIndex++;
        currentIndex = currentIndex % cards.length;
        cards[currentIndex].classList.add("cycling");
        cycleCount++;

        if (cycleCount > totalCycles) {
            clearInterval(interval);
            cards.forEach((card) => card.classList.remove("cycling"));
            const randomIndex = Math.floor(Math.random() * characters.length);

            const randomCard = cards[randomIndex];

            randomCard.classList.add("chosen");
        }
    }, 200);
};
//
