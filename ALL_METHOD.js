var date = '{"a":23,"b":87,"c":75}'
var fs = require("fs")
fs.open("all_method.json", "w", function(err) {

    if (err) throw err;
})
fs.rename("all_method.json", "ALL_METHOD.JSON", function(err) {
    if (err) throw err;
})
fs.writeFile("ALL_METHOD.JSON", date, function(err) {
    if (err) throw err;
})
fs.readFile("ALL_METHOD.JSON", "utf-8", function(err, data) {
    if (err) throw err;
    console.log(data)
})
fs.appendFile("ALL_METHOD.txt ", "hellow ", function(err) {
    if (err) throw err;
})