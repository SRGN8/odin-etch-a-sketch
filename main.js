let cell_count = 16; // GRID CELL COUNT

// PROJECT CONTAINER
const body = document.querySelector("body");
const container = document.createElement("div");
container.id = "container";
body.appendChild(container);
const contSelector = document.getElementById("container");

/*

TODO

# Style Color Button / Controls / Rest of App

# Create event listeners that will do the following:
- update the current value of the grid slider if changed
- starts coloring cells in of the grid once you click one. Hovering over should change color
- bring up color wheel when color button is pressed so that you can change it from the default.
- make all cells white with clear button 
- * Generate new grid using value from range slider
- Rainbow colors mode???

*: The cells inside of the grid are generated via the global variable `cell_count`.
*  We utilize CSS Grid to organize cells in grid into columns & rows == `cell_count`
*  When new grid is pressed, the following should happen:
*  - main.js `cell_count` is updated with value of range slider
*  - `grid-template-rows` & `grid-template-columns` repeat function updates with new `cell_count` value as well. (`.grid` from style.css)
*  - Refresh page with new grid. Slider should default at new value and not 16 like when the app loads up 


*/

function header() {
  const header = document.createElement("h1");
  const h_text = document.createTextNode("Etch-A-Sketch");
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
  const colorBtn = document.createElement("button");
  colorBtn.id = "colorBtn";
  contPanel.appendChild(colorBtn);

  // CLEAR BUTTON
  const clearBtn = document.createElement("button");
  clearBtn.id = "clearBtn";
  const cBtn_text = document.createTextNode("CLEAR");
  clearBtn.appendChild(cBtn_text);
  contPanel.appendChild(clearBtn);

  // NEW GRID BUTTON
  const newGridBtn = document.createElement("button");
  newGridBtn.id = "newGrid";
  const ngBtn_text = document.createTextNode("NEW GRID");
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
  range.value = "16";
  range.classList.add("range");
  range.id = "sliderRange";
  gSlider.appendChild(range);
  // SLIDER VALUE
  const rangeSelector = document.getElementById("sliderRange");
  const rangeValue = document.createElement("div");
  rangeValue.id = "rangeValue";
  rangeValue.innerHTML = rangeSelector.value;
  gSlider.appendChild(rangeValue);
}

function makeGrid() {
  // GRID
  const grid = document.createElement("div");
  grid.classList.add("grid");
  contSelector.appendChild(grid);

  // CELLS
  for (let cell = 1; cell <= cell_count * cell_count; cell++) {
    const pixel = document.createElement("div");
    pixel.id = "cell";
    grid.appendChild(pixel);
  }

  console.log(cell.length);
}

function app() {
  header();
  controls();
  makeGrid();
}

app();
