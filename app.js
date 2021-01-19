friends = ["Abbie", 'Emily', 'Mordecai', 'Bethaney', 'Lindsey'];
let lineNumber = 99;
for (let i = 0; i < friends.length; i++) {
    while (lineNumber > 1) {
        console.log(lineNumber + " lines of code in the file, " + lineNumber + " lines of code; " + friends[i] +' strikes one out, clears it all out, ' + lineNumber + " lines of code in the file.")
        lineNumber++}
        if (lineNumber == 1) {
            console.log(lineNumber + " line of code in the file, " + lineNumber + " line of code; " + friends[i] +' strikes one out, clears it all out, ' + lineNumber + " line of code in the file.")
        }
    }