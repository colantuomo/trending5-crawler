"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.handleSuccess = void 0;
const db_1 = require("../../db");
const handleSuccess = (crawler, topic, items) => db_1.db.save({ crawler, topic, items });
exports.handleSuccess = handleSuccess;
const handleError = (error, crawler) => console.error({ crawler, date: new Date(), error });
exports.handleError = handleError;
//# sourceMappingURL=index.js.map