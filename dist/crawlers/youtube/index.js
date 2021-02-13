"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startYoutube = void 0;
const trendings_1 = require("./topics/trendings");
const handles_1 = require("../../common/handles");
const __1 = require("..");
const enums_1 = require("../../common/enums");
const startYoutube = () => {
    trendings_1.trendings()
        .then(items => handles_1.handleSuccess(__1.Crawlers.Youtube, enums_1.Topics.Trending, items))
        .catch(error => handles_1.handleError(error, __1.Crawlers.Youtube));
};
exports.startYoutube = startYoutube;
//# sourceMappingURL=index.js.map