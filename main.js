function make2DArray (columns, rows) {
    var array = new Array(columns);
    for (var i = 0; i < array.length; i++) {
        array[i] = new Array(columns);
    }
    return array;
}

var grid;
var columns;
var rows;
var widthHeight = 20;

function setup() {
    createCanvas(200, 200);
    columns = floor(width / widthHeight);
    rows = floor(height / widthHeight);

    grid = new make2DArray(columns, rows);

    for (var i = 0; i < columns; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Cell();
        }
    }

}

function draw() {

}
