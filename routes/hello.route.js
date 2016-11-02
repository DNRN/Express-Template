"use strict";
var express = require('express');
var HelloRouter = (function () {
    function HelloRouter(app) {
        this.router = express.Router();
        app.use(this.router);
        this.setupRoutes();
    }
    HelloRouter.prototype.setupRoutes = function () {
        this.router.get('/hello', function (req, res) {
            return res.json("Hello world");
        });
    };
    return HelloRouter;
}());
exports.HelloRouter = HelloRouter;
