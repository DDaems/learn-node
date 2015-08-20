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
/*
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
*/


/*
* Exercise 4    "MY FIRST ASYNC I/O!"
*/
/*
var fs = require('fs')

// collect de value van via een callback function
// asyncrone de nodejs way

// note: we hebben hier als 2de argument 'utf8' meegegeven aan de filesystem
// dit converteerd automatisch de bufferObject naar een string voor ons.
// waardoor we niet gebruik moeten maken van de toString functie
fs.readFile(process.argv[2], 'utf8', function(err, data){
    console.log(data.split('\n').length - 1)
})
*/


/*
* Exercise 5    "FILTER LS"
*/
/*
var fs = require('fs')
var path = require('path') // standaard node lib

var filepath = process.argv[2]
var extention = '.' + process.argv[3]
fs.readdir(filepath, function(err, list) {

    for (var i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === extention) {
            
            console.log(list[i])
        }
    }
})
*/
// Korter, en beter methode dan de mijne
// -------------------------------------
/*
fs.readdir(process.argv[2], function(err, list) {
    
    // voor elk list item runnen we een functie en passen de listitem mee
    list.forEach(function (file) {
        if(path.extname(file) === '.' + process.argv[3]) {
            console.log(file)
        }
    })
})
*/


/*
* Exercise 6: MAKE IT MODULAR
*/
var fs = require('fs')
var path = require('path') // standaard node lib
var mymod = require('./mymodule') // laad mijn module

var dir = process.argv[2]
var ext = process.argv[3]
//mymod.dirScan4Ext
mymod(dir, ext, function(err, data) {
    if(err) return callback;
    //return console.error('There was an error:', err)
    
    data.forEach(function(file) {
        console.log(file)   
    })
})



