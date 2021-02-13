"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startG1 = void 0;
const economy_1 = require("./topics/economy");
const __1 = require("../");
const handles_1 = require("../../common/handles");
const enums_1 = require("../../common/enums");
const startG1 = () => {
    economy_1.economy()
        .then(items => handles_1.handleSuccess(__1.Crawlers.G1, enums_1.Topics.Economy, items))
        .catch(error => handles_1.handleError(error, __1.Crawlers.G1));
};
exports.startG1 = startG1;
//# sourceMappingURL=index.js.map