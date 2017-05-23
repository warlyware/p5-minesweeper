function Cell(x, y, widthHeight) {
    this.x = x;
    this.y = y;
    this.widthHeight = widthHeight;
    this.bomb = true;
    this.revealed = true;
}

Cell.prototype.show = function() {
    rect(this.x, this.y, this.widthHeight, this.widthHeight);
}
