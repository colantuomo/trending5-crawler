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
Object.defineProperty(exports, "__esModule", { value: true });
exports.trendings = void 0;
const puppeteer_1 = require("puppeteer");
const G1_ECONOMY = `https://www.youtube.com/feed/trending`;
const trendings = () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_1.launch();
    const page = yield browser.newPage();
    yield page.goto(G1_ECONOMY);
    const trendingVideos = yield page.$$eval('.style-scope .ytd-expanded-shelf-contents-renderer .text-wrapper #title-wrapper a', el => el
        .map(x => {
        const YT_BASE = 'https://www.youtube.com';
        return {
            title: x.textContent.trim(),
            link: `${YT_BASE}${x.getAttribute('href')}`,
        };
    })
        .slice(0, 5));
    const imgs = yield page.$$eval('.style-scope .ytd-video-renderer .ytd-thumbnail img', el => el.map(x => x.getAttribute('src')).slice(0, 5));
    const items = trendingVideos.map((item, idx) => {
        const img = imgs[idx];
        return Object.assign(Object.assign({}, item), { img });
    });
    return items;
});
exports.trendings = trendings;
//# sourceMappingURL=trendings.js.map