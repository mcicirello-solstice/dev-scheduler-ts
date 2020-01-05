"use strict";
exports.__esModule = true;
var fs = require("fs");
var DataProvider = /** @class */ (function () {
    function DataProvider() {
    }
    DataProvider.prototype.getOnboardingTasks = function () {
        return this.loadDataSync("onboarding.json").tasks;
    };
    DataProvider.prototype.getCourses = function () {
        return this.loadDataSync("courses.json").courses;
    };
    DataProvider.prototype.getStories = function () {
        return this.loadDataSync("stories.json").stories;
    };
    DataProvider.prototype.loadDataSync = function (fileName) {
        return JSON.parse(fs.readFileSync("./data-sources/" + fileName, "utf8"));
    };
    return DataProvider;
}());
exports.DataProvider = DataProvider;
