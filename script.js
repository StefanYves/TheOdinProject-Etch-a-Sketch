const container = document.createElement("div");
container.classList.add("wrapper");

const resetBtn = document.createElement("button");
resetBtn.innerHTML = "Clear";

function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (let i = 0; i < rows * cols; i++) {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add("grid");
    newDiv.onmouseenter = function changeColor() {
      const colors = ["#cffafe", "#0891b2", "#083344"];
      const random_color = colors[Math.floor(Math.random() * colors.length)];

      newDiv.style.background = random_color;

      resetBtn.onclick = function resetGrid() {};
    };
  }
}

makeGrid(16, 16);

document.body.appendChild(container);
document.body.appendChild(resetBtn);
