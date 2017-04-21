var rect = {
    perimeter: function (x, y) {
        return (2 *(x + y));
    },

    area: function (x, y) {
        return (x * y);
    }
};

function solveRect(l, b) {
    console.log("--Rectangle Calculations--");
    console.log("Length: " + l + " Breadth: " + b);
    if (l < 0 || b < 0) {
        console.log("Rectangle dimensions not positive");
        return;
    }

    console.log("Rectangle perimeter: " + rect.perimeter(l, b));
    console.log("Rectangle area: " + rect.area(l, b));
}

solveRect(2, 4);
solveRect(-3, 5);
