function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  input: document.querySelector("input"),
  controls: document.querySelector("#controls"),
  boxes: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", () => {
  const amount = refs.input.value;
  createBoxes(amount);
});

refs.destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});

let boxSize = 30;

const createBoxes = (amount) => {
  const boxesCollection = [];

  while (boxesCollection.length < amount) {
    const divBox = document.createElement("div");
    divBox.style.backgroundColor = getRandomHexColor();
    divBox.style.height = `${boxSize}px`;
    divBox.style.width = `${boxSize}px`;
    divBox.classList.add("divBox");
    boxesCollection.push(divBox);
    boxSize += 10;
  }

  refs.boxes.append(...boxesCollection);
};

const destroyBoxes = () => {
  const divBox = refs.boxes.querySelectorAll(".divBox");
  for (const box of divBox) {
    box.remove();
  }
  boxSize = 30;
};
