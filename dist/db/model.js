"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsModel = void 0;
const mongoose_1 = require("mongoose");
const Items = new mongoose_1.Schema({
    title: String,
    description: String,
    link: String,
    img: String,
});
const schema = new mongoose_1.Schema({
    crawler: String,
    topic: String,
    items: [Items],
    date: Date,
});
const TopicsModel = mongoose_1.model('topics', schema);
exports.TopicsModel = TopicsModel;
//# sourceMappingURL=model.js.map