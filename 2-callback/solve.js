var rect = require("./rectangle");

function solveRect(l, b) {
    console.log("--Rectangle Calculations--");
    console.log("Length: " + l + " Breadth: " + b);

    rect(l, b, function(err, res) {
        if (err) {
            console.log("Error: ", err.message);
            return;
        }

        console.log("Rectangle perimeter: " + res.perimeter());
        console.log("Rectangle area: " + res.area());
    });
}

solveRect(2, 4);
solveRect(-3, 5);
