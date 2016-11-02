var fs = require('fs');

let settings = {
    port: 8080
}

fs.writeFile("./config/settings.json", JSON.stringify(settings, null, 4), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("Settings file created!");
});