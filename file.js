var fs = require('fs');
fs.writeFile("/tmp/test", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
fs.readFile("/tmp/test", "utf8", function(err,f) {
    if(err) {
        return console.log(err);
    }
    console.log(f);
}); 
