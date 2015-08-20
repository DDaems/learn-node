/*
* Exercise 1  "HELLO WORLD"
*/
/*
// Shit dit was moeilijk, stomme typo's
console.log('HELLO WORLD')
*/


/*
* Exercise 2  "BABY STEPS"
*/
/*
// een variable leeg laten = undefined
var count = 0

// zet zelf de start index voor de loop!
for (var i = 2; i < process.argv.length ; i++) {
    
    // Maak er een Number() van inplaats van string.
    // +'123' is een shorthand
    count += +process.argv[i]   
}
console.log(count)
*/


/*
* Exercise 3    "MY FIRST I/O!"
*/

// load node core libraries
var fs = require('fs') //filesystem

// lees het bestand uit dat is doorgegeven door de commandline
// syncronisch, none blocking?
var content = fs.readFileSync(process.argv[2])

// De data wordt geladen in een buffer object
// node zijn manier om efficient veel arbitraty 
// data in een array te kunnen laden.
// we moeten dit converteren naar een string
// .toString()
// Daarna willen we de aantal lijnen tellen,
// door de string te splitten waar een newline char
// voorkomt, dit geneert een array.
// we nemen dan de lengt van de array en doen -1
// omwille dat het bestand er op het einde geen newline is
// maar er toch een extra index is voor de laatste zin
var count = content.toString().split('\n').length - 1
console.log(count)




























