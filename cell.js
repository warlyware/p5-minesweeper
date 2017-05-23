function Cell(x, y, widthHeight) {
    this.bomb = true;
    this.revealed = true;
}

Cell.prototype.show = function() {
    rect(this.x, this.y, this.width, this.height);
}
