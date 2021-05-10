function changeColour(x) {
    switch (x) {
        case "red":
            let r = document.getElementById("red");
            if (r.style.backgroundColor === "transparent") {
                r.style.backgroundColor = "red";
            } else {
                r.style.backgroundColor = "transparent";
            }
            break;

        case "orange":
            let o = document.getElementById("orange");
            if (o.style.backgroundColor === "transparent") {
                o.style.backgroundColor = "orange";
            } else {
                o.style.backgroundColor = "transparent";
            }
            break;

        case "yellow":
            let y = document.getElementById("yellow");
            if (y.style.backgroundColor === "transparent") {
                y.style.backgroundColor = "yellow";
            } else {
                y.style.backgroundColor = "transparent";
            }
            break;

        case "green":
            let g = document.getElementById("green");
            if (g.style.backgroundColor === "transparent") {
                g.style.backgroundColor = "green";
                g.style.color = "White";
            } else {
                g.style.backgroundColor = "transparent";
                g.style.color = "black";
            }
            break;

        case "blue":
            let b = document.getElementById("blue");
            if (b.style.backgroundColor === "transparent") {
                b.style.backgroundColor = "blue";
                b.style.color = "White";
            } else {
                b.style.backgroundColor = "transparent";
                b.style.color = "black";
            }
            break;

        case "dark-purple":
            let dP = document.getElementById("dark-purple");
            if (dP.style.backgroundColor === "transparent") {
                dP.style.backgroundColor = "#301934";
                dP.style.color = "White";
            } else {
                dP.style.backgroundColor = "transparent";
                dP.style.color = "black";
            }
            break;

        case "purple":
            let p = document.getElementById("purple");
            if (p.style.backgroundColor === "transparent") {
                p.style.backgroundColor = "#800080";
                p.style.color = "White";
            } else {
                p.style.backgroundColor = "transparent";
                p.style.color = "black";
            }
            break;

        default:
            console.log("invalid selection");
            break;
    }
}


/*  Function to toggle bg colour on-off

function changeColour() {
    var x = document.getElementById("red");
    if (x.style.backgroundColor === "transparent") {
        x.style.backgroundColor = "red";
    } else {
        x.style.backgroundColor = "transparent";
    }
} */

/* Switch Function to change bg clolor with no toggle on-off
function changeColour(x) {
    switch (x) {
        case "red":
            document.getElementById(x).style.backgroundColor = "red";
            break;

        case "orange":
            document.getElementById(x).style.backgroundColor = "orange";
            break;

        case "yellow":
            document.getElementById(x).style.backgroundColor = "yellow";
            break;

        case "green":
            document.getElementById(x).style.backgroundColor = "green";
            break;

        case "blue":
            document.getElementById(x).style.backgroundColor = "blue";
            break;

        case "dark-purple":
            document.getElementById(x).style.backgroundColor = "#301934";
            break;

        case "purple":
            document.getElementById(x).style.backgroundColor = "#800080";
            break;

        default:
            console.log("invalid selection");
            break;
    }
} */