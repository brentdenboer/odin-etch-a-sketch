function createGrid(gridSize, gridContainer) {
  const arrayOfGridItems = [];

  for (let i = 0; i < (gridSize * gridSize); i++) {
    const gridItem = document.createElement("div");

    gridItem.classList.add("grid-item");
    gridItem.style.width = `calc(100% / ${gridSize})`;

    gridItem.addEventListener("mouseenter", () => {
      const itemStyle = gridItem.style;

      itemStyle.background = randomRGB();
    });

    arrayOfGridItems.push(gridItem);
  }

  gridContainer.replaceChildren(...arrayOfGridItems);
}

function ranRGBNum() {
  return Math.floor(Math.random() * 255);
}

function randomRGB() {
  return `rgb(${ranRGBNum()} ${ranRGBNum()} ${ranRGBNum()})`;
}

function main() {
  let gridSize = 16;

  const gridSizeButton = document.querySelector(".grid-size-button");
  const gridContainer = document.querySelector(".grid-container");

  createGrid(gridSize, gridContainer);

  gridSizeButton.addEventListener("click", () => {
    gridSize = prompt("Enter the size of the grid! (Max 100)");

    while (gridSize > 100) {
      gridSize = prompt("Please enter a number of 100 or less");
    }

    createGrid(gridSize, gridContainer);
  });
}

main();
