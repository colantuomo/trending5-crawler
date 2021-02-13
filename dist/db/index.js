"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const model_1 = require("./model");
const connect = () => {
    return mongoose_1.default.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
};
const deleteAll = () => __awaiter(void 0, void 0, void 0, function* () {
    yield model_1.TopicsModel.deleteMany({});
});
const save = (data) => {
    data.date = !data.date ? new Date() : data.date;
    console.log(`Saving ${data.crawler} / ${data.topic}...`);
    new model_1.TopicsModel(data).save();
};
exports.db = {
    connect,
    save,
    deleteAll,
};
//# sourceMappingURL=index.js.map