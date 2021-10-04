let string = "", tipe = "left";

let n = 14;

for(let i = 1; i <= n; i++) {
    string += "\n";
    for(let j = 1; j <= n; j++) {
        if(i % 2 === 0) {
            if(j === 1 || j === n) string += "@";
            else string += " ";
        } else {
            if(tipe === "left") {
                if(j === 2) string += " ";
                else string += "@";
            } else {
                if( j === n - 1) string += " ";
                else string += "@";
            }

        }
    }
    if(i % 2 !== 0) {
        if(tipe === "left") tipe = "right";
        else tipe = "left";
    }
}

console.log(string);