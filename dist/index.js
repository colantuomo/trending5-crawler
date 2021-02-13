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
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
const github_1 = require("./crawlers/github");
const g1_1 = require("./crawlers/g1");
const youtube_1 = require("./crawlers/youtube");
dotenv_1.default.config();
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.db.connect();
    console.log('deleting older documents...');
    yield db_1.db.deleteAll();
    github_1.startGithub();
    youtube_1.startYoutube();
    g1_1.startG1();
});
start();
//# sourceMappingURL=index.js.map