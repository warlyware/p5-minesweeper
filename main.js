function make2DArray (columns, rows) {
    var array = new Array(columns);
    for (var i = 0; i < array.length; i++) {
        array[i] = new Array(columns);
    }
}

function Cell() {
    this.bomb = true;
    this.revealed = true;
}

var grid;
var columns = 20;
var rows = 20;

function setup() {
    createCanvas(200, 200);
    grid = new make2DArray(columns, rows);

    for (var i = 0; i < columns; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }

}

function draw() {

}
