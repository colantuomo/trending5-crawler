import * as puppeteer from "puppeteer";
import { Crawlers } from "../..";
import { GHTopics, GithubTrending } from "../interfaces";

const GH_TRENDING_PAGE = "https://github.com/trending";

export const trendings = async (): Promise<GithubTrending[]> => {
  console.log(`${Crawlers.Github} - [${GHTopics.Trending}] starting..`);
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
  const repos = repoNames.map((name, idx) => {
    const description = details[idx];
    const language = languages[idx];
    const star = stars[idx];
    return { name, description, language, stars: star };
  });
  console.log(`${Crawlers.Github} - [${GHTopics.Trending}] ending..`);
  return repos;
};
