import * as puppeteer from "puppeteer";
import { GithubTrending } from "../interfaces";

const GH_BASE = "https://github.com";
const GH_TRENDING_PAGE = `${GH_BASE}/trending`;

export const trendings = async (): Promise<GithubTrending[]> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(GH_TRENDING_PAGE);
  const repoNames = await page.$$eval(".Box-row .lh-condensed a", (el) =>
    el.map((link) => link.getAttribute("href")).slice(0, 5)
  );
  const details = await page.$$eval(".Box-row p", (el) =>
    el.map((p) => p.textContent.trim())
  );
  await page.waitForSelector("[itemprop=programmingLanguage]");
  const languages = await page.$$eval(
    ".text-gray .d-inline-block [itemprop=programmingLanguage]",
    (el) => el.map((e) => e.textContent)
  );
  const stars = await page.$$eval(".text-gray .muted-link", (el) =>
    el.map((e) => e.textContent.trim())
  );
  await browser.close();
  const repos = repoNames.map((title, idx) => {
    const description = details[idx];
    const language = languages[idx];
    const star = stars[idx];
    const img =
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
    const link = `${GH_BASE}${title}`;
    return { title, description, language, stars: star, img, link };
  });
  return repos;
};
