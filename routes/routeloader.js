"use strict";
var hello_route_1 = require('./hello.route');
var RouteLoader = (function () {
    function RouteLoader() {
    }
    RouteLoader.LoadRoutes = function (app) {
        var helloRouter = new hello_route_1.HelloRouter(app);
    };
    return RouteLoader;
}());
exports.RouteLoader = RouteLoader;
