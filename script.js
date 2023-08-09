const container = document.createElement("div");
container.classList.add("wrapper");

let size;

const changeSize = document.createElement("button");
changeSize.innerHTML = "16x16";
changeSize.onclick = () => {
  if (size === 16) {
    alert("The size is already 16");
  } else {
    size = 16;
    makeGrid(size, size);
  }
};

const changeSize2 = document.createElement("button");
changeSize2.innerHTML = "32x32";
changeSize2.onclick = () => {
  if (size === 32) {
    alert("The size is already 16");
  } else {
    size = 32;
    makeGrid(size, size);
  }
};

const changeSize3 = document.createElement("button");
changeSize3.innerHTML = "64x64";
changeSize3.onclick = () => {
  if (size === 64) {
    alert("The size is already 16");
  } else {
    size = 64;
    makeGrid(size, size);
  }
};

function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  container.innerHTML = "";

  for (let i = 0; i < rows * cols; i++) {
    // Creating the canvas
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add("grid");
    // Changing colors on hover
    newDiv.onmouseenter = function changeColor() {
      const colors = ["#cffafe", "#0891b2", "#083344"];
      const random_color = colors[Math.floor(Math.random() * colors.length)];

      newDiv.style.background = random_color;
    };
  }
}

document.body.appendChild(container);
document.body.appendChild(changeSize);
document.body.appendChild(changeSize2);
document.body.appendChild(changeSize3);
