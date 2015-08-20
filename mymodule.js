/*
* Exercise 6: MAKE IT MODULAR
*/

// Een module die 2 argumenten en een callback aanneemt om een bestandenlijst te filteren.
// argument 1 = Lijst, 2 = extention, 3 = callback
fs = require('fs')
path = require('path')

module.exports = function(dir, ext, callback) {
    ext = '.'+ ext

    ls = []
    fs.readdir(dir, function(err, list) {
        if(err) return callback(err)
        
        // Alternatieve oplossing met filter()
        // list = list.filter( function(file) {
        //    return path.extname(file) === '.' + ext
        // }) callback(null, list)
        list.forEach( function(file) {
            if (path.extname(file) === ext) {  
                ls.push(file) 
            }
        })
        callback(null, ls)
    })
}

/*
* EXPORT AN ANONYMOUS OBJECT (gebaseerd op exercise 6, wel geen correcte oplossing)
* Dit was een voor uit te zoeken hoe ik. mymodule.funcNames kon gebruiken
*/
/*
fs = require('fs')
path = require('path')

var mymodule = function () {};

// Enhired property's van mymodule object?
mymodule.prototype.dirScan4Ext = function(dir, ext, callback) {
    ext = '.'+ ext

    ls = []
    fs.readdir(dir, function(err, list) {
        if(err) return callback('error reading directory')
        
        list.forEach( function(file) {
            if (path.extname(file) === ext) {  
                ls.push(file) 
            }
        })
        callback(null, ls)
    })
}
module.exports = new mymodule()
*/
