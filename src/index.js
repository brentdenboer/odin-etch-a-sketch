function createGrid(gridSize, gridContainer) {
  const arrayOfGridItems = [];

  for (let i = 0; i < (gridSize * gridSize); i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.width = `calc(100% / ${gridSize})`;

    gridItem.addEventListener("mouseenter", () => {
      gridItem.classList.add("grid-item--hovered");
    });

    arrayOfGridItems.push(gridItem);
  }

  gridContainer.replaceChildren(...arrayOfGridItems);
}

function main() {
  let gridSize = 16;

  const gridSizeButton = document.querySelector(".grid-size-button");
  const gridContainer = document.querySelector(".grid-container");

  createGrid(gridSize, gridContainer);

  gridSizeButton.addEventListener("click", () => {
    gridSize = prompt("Enter the size of the grid!");
    createGrid(gridSize, gridContainer);
  });
}

main();
