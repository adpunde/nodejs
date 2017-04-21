var rect = require("./rectangle");
var argv = require("yargs")
    .usage('Usage: node $0 --l=[num] --b=[num]')
    .demand(['l', 'b'])
    .argv;

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

solveRect(argv.l, argv.b);
