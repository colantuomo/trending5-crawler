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
const GH_BASE = 'https://github.com';
const GH_TRENDING_PAGE = `${GH_BASE}/trending`;
const trendings = () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_1.launch();
    const page = yield browser.newPage();
    yield page.goto(GH_TRENDING_PAGE);
    const repoNames = yield page.$$eval('.Box-row .lh-condensed a', el => el.map(link => link.getAttribute('href')).slice(0, 5));
    const details = yield page.$$eval('.Box-row p', el => el.map(p => p.textContent.trim()));
    yield page.waitForSelector('[itemprop=programmingLanguage]');
    const languages = yield page.$$eval('.text-gray .d-inline-block [itemprop=programmingLanguage]', el => el.map(e => e.textContent));
    const stars = yield page.$$eval('.text-gray .muted-link', el => el.map(e => e.textContent.trim()));
    yield browser.close();
    const repos = repoNames.map((title, idx) => {
        const description = details[idx];
        const language = languages[idx];
        const star = stars[idx];
        const img = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
        const link = `${GH_BASE}${title}`;
        return { title, description, language, stars: star, img, link };
    });
    return repos;
});
exports.trendings = trendings;
//# sourceMappingURL=trendings.js.map