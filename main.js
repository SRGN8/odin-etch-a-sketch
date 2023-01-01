let cell_count = 16; // GRID CELL COUNT
let visible_cell_count = 16; // Temporary Value for listener
let cellColor = "#000000";

// MOUSE BUTTON CHECKS
let mouseDown = false;
document.body.onmousedown = () => {
  mouseDown = true;
};
document.body.onmouseup = () => {
  mouseDown = false;
};

// PROJECT CONTAINER
const body = document.querySelector("body");
const container = document.createElement("div");
container.id = "container";
body.appendChild(container);
const contSelector = document.getElementById("container");

/*

TODO
- Rainbow colors mode???

*/

function header() {
  const header = document.createElement("h1");
  const h_text = document.createTextNode("Etch-A-Sketch");
  header.classList.add("header");
  header.appendChild(h_text);
  body.appendChild(header);

  // HEADER HEIRARCHY (MOVE UP)
  if (header.previousElementSibling) {
    header.parentNode.insertBefore(header, header.previousElementSibling);
  }
}

function controls() {
  // CONTROL PANEL
  const controls = document.createElement("div");
  controls.id = "controls";
  contSelector.appendChild(controls);
  const contPanel = document.getElementById("controls");

  // COLOR SELECT
  const colorData = document.createElement("input");
  colorData.type = "color";
  colorData.value = "#000000";
  colorData.id = "colorData";
  colorData.addEventListener("change", colorWheel);
  const colorText = document.createElement("input");
  colorText.type = "text";
  colorText.value = colorData.value;
  colorText.id = "colorText";
  colorText.disabled = "true";
  const colorBtn = document.createElement("span");
  colorBtn.id = "colorBtn";
  colorBtn.addEventListener("click", colorWheel);
  contPanel.appendChild(colorBtn);
  contPanel.appendChild(colorText);
  contPanel.appendChild(colorData);

  // CLEAR BUTTON
  const clearBtn = document.createElement("button");
  clearBtn.id = "clearBtn";
  const cBtn_text = document.createTextNode("CLEAR");
  clearBtn.addEventListener("click", clearGrid);
  clearBtn.appendChild(cBtn_text);
  contPanel.appendChild(clearBtn);

  // NEW GRID BUTTON
  const newGridBtn = document.createElement("button");
  newGridBtn.id = "newGrid";
  const ngBtn_text = document.createTextNode("CREATE NEW GRID");
  newGridBtn.addEventListener("click", newGridEvent);
  newGridBtn.appendChild(ngBtn_text);
  contPanel.appendChild(newGridBtn);

  // GRID SIZE SLIDER
  const slider = document.createElement("div"); // SLIDER CONTAINER
  slider.id = "gSlider";
  contPanel.appendChild(slider);
  const gSlider = document.getElementById("gSlider");
  // SLIDER RANGE
  const range = document.createElement("input");
  range.type = "range";
  range.min = "2";
  range.max = "100";
  range.value = 16;
  range.classList.add("range");
  range.id = "sliderRange";
  range.addEventListener("mousemove", sliderEvent);
  range.addEventListener("keydown", sliderEvent);
  gSlider.appendChild(range);
  // SLIDER VALUE
  const rangeSelector = document.getElementById("sliderRange");
  const rangeValue = document.createElement("output");
  rangeValue.type = "number";
  rangeValue.value = `GRID PIXEL SIZE: ${rangeSelector.value}`;
  rangeValue.disabled = "true";
  rangeValue.id = "rangeValue";
  gSlider.appendChild(rangeValue);

  // EVENT LISTENERS
  // RANGE SLIDER LISTENER
  function sliderEvent() {
    visible_cell_count = rangeSelector.value;
    rangeSelector.value = visible_cell_count;
    rangeValue.innerHTML = `GRID PIXEL SIZE: ${visible_cell_count}`;
    // console.log(pixelCount.value);
  }
  // NEW GRID EVENT
  function newGridEvent() {
    const currentGrid = document.getElementsByClassName("grid")[0];
    contSelector.removeChild(currentGrid);
    cell_count = visible_cell_count;
    makeGrid();
    // console.log(cell_count);
  }

  // CLEAR GRID EVENT
  function clearGrid() {
    const wipeGrid = document.getElementsByClassName("grid")[0];
    contSelector.removeChild(wipeGrid);
    makeGrid();
  }

  // COLOR WHEEL EVENT
  function colorWheel() {
    const createColorW = document.getElementById("colorData");
    const setColorBtn = document.getElementById("colorBtn");
    const setColorText = document.getElementById("colorText");

    cellColor = createColorW.value;
    setColorBtn.style.backgroundColor = cellColor;
    setColorText.value = createColorW.value;
    console.log(setColorText);
    createColorW.click();
  }
}

// COLOR CELL EVENT
function colorCellEvent(cell) {
  if (cell.type === "mouseover" && !mouseDown) return;

  this.style.backgroundColor = cellColor;
}

function makeGrid() {
  // GRID
  const grid = document.createElement("div");
  grid.classList.add("grid");
  grid.style.cssText = `
  display: grid; 
  grid-template-rows: repeat(${cell_count}, 1fr);
  grid-template-columns: repeat(${cell_count}, 1fr);
  height: 40vw; 
  width: 40vw;
  border: 10px solid rgb(160, 46, 1);
  border-radius: 0.5%;
  `;
  contSelector.appendChild(grid);

  // CELLS
  for (let cell = 1; cell <= cell_count * cell_count; cell++) {
    const pixel = document.createElement("div");
    pixel.classList.add("cell");
    pixel.addEventListener("mousedown", colorCellEvent);
    pixel.addEventListener("mouseover", colorCellEvent);
    grid.appendChild(pixel);
  }

  // console.log(cell.length);
}

function app() {
  header();
  controls();
  makeGrid();
}

app();
