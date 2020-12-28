import * as puppeteer from "puppeteer";
import { Crawlers } from "../../";
import { G1Economy, G1Topics } from "../interfaces";

const G1_ECONOMY = "https://g1.globo.com/economia/";

export const economy = async (): Promise<G1Economy[]> => {
  console.log(`${Crawlers.G1} - [${G1Topics.Economy}] starting..`);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(G1_ECONOMY);
  const header = await page.$$eval(".feed-post-body-title ._b a", (el) =>
    el
      .map((x) => {
        return { title: x.textContent.trim(), link: x.getAttribute("href") };
      })
      .slice(0, 5)
  );
  const descriptions = await page.$$eval(".feed-post-body-resumo", (el) =>
    el.map((x) => x.textContent.trim())
  );
  await browser.close();
  const data = header.map(({ title, link }, idx) => {
    const description = descriptions[idx];
    return { title, description, link };
  });
  console.log(`${Crawlers.G1} - [${G1Topics.Economy}] ending..`);
  return data;
};
