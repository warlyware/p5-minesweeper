function Cell(x, y, widthHeight) {
    this.x = x;
    this.y = y;
    this.widthHeight = widthHeight;
    this.bomb = random(1) < 0.5;
    this.revealed = false;
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

Cell.prototype.contains = function(x, y) {
    var xIsInBounds = x > this.x && x < this.x + this.widthHeight;
    var yIsInBounds = y > this.y && y < this.y + this.widthHeight;
    return xIsInBounds && yIsInBounds;
}
