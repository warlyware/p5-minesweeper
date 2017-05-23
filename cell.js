function Cell(x, y, widthHeight) {
    this.x = x;
    this.y = y;
    this.widthHeight = widthHeight;
    this.bomb = true;
    this.revealed = true;
}

Cell.prototype.show = function() {
    stroke(0);
    noFill(0);
    rect(this.x, this.y, this.widthHeight, this.widthHeight);

    if (this.revealed && this.bomb) {
        var halfWidthHeight = this.widthHeight * 0.5;
        ellipse(this.x + halfWidthHeight, this.y + halfWidthHeight, halfWidthHeight);
    }
}
