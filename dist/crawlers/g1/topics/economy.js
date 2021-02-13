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
exports.economy = void 0;
const puppeteer_1 = require("puppeteer");
const G1_ECONOMY = 'https://g1.globo.com/economia/';
const economy = () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_1.launch();
    const page = yield browser.newPage();
    yield page.goto(G1_ECONOMY);
    const header = yield page.$$eval('.feed-post-body-title ._b a', el => el
        .map(x => {
        return { title: x.textContent.trim(), link: x.getAttribute('href') };
    })
        .slice(0, 5));
    const descriptions = yield page.$$eval('.feed-post-body-resumo', el => el.map(x => x.textContent.trim()));
    const imgs = yield page.$$eval('.feed-media-wrapper img', el => el.map(x => x.getAttribute('src')).slice(0, 5));
    yield browser.close();
    const data = header.map(({ title, link }, idx) => {
        const description = descriptions[idx];
        const img = imgs[idx];
        return { title, description, link, img };
    });
    return data;
});
exports.economy = economy;
//# sourceMappingURL=economy.js.map