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

// een variable leeg laten = undefined
var count = 0

// zet zelf de start index voor de loop!
for (var i = 2; i < process.argv.length ; i++) {
    
    // Maak er een Number() van inplaats van string.
    // +'123' is een shorthand
    count += +process.argv[i]   
}
console.log(count)





























