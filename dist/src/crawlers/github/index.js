"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startGithub = void 0;
const trendings_1 = require("./topics/trendings");
const __1 = require("..");
const handles_1 = require("../../common/handles");
const enums_1 = require("../../common/enums");
const startGithub = () => {
    trendings_1.trendings()
        .then(items => handles_1.handleSuccess(__1.Crawlers.Github, enums_1.Topics.Trending, items))
        .catch(error => handles_1.handleError(error, __1.Crawlers.Github));
};
exports.startGithub = startGithub;
//# sourceMappingURL=index.js.map