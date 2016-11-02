"use strict";
var express = require('express');
var routeloader_1 = require('./routes/routeloader');
var Application = (function () {
    function Application() {
        this.app = express();
        this.loadSetting();
        this.port = process.env.PORT || this.settings.port;
        this.configure();
        this.loadMiddleware();
    }
    Application.prototype.start = function () {
        routeloader_1.RouteLoader.LoadRoutes(this.app);
        this.app.listen(this.port);
        console.log("Application started at: " + this.port);
    };
    Application.prototype.loadSetting = function () {
        try {
            this.settings = JSON.parse(require('fs').readFileSync(__dirname + "/config/settings.json"));
            console.log(this.settings);
        }
        catch (error) {
            console.log("Setting not found. Have you executed 'npm run config' ?");
        }
    };
    Application.prototype.configure = function () {
    };
    Application.prototype.loadMiddleware = function () {
    };
    return Application;
}());
exports.Application = Application;
