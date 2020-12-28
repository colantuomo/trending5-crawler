import * as puppeteer from "puppeteer";

const G1_ECONOMY = `https://www.youtube.com/feed/trending`;

export const trendings = async (): Promise<any[]> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(G1_ECONOMY);
  const trendingVideos = await page.$$eval(
    ".style-scope .ytd-expanded-shelf-contents-renderer .text-wrapper #title-wrapper a",
    (el) =>
      el
        .map((x) => {
          const YT_BASE = "https://www.youtube.com";
          return {
            title: x.textContent.trim(),
            link: `${YT_BASE}${x.getAttribute("href")}`,
          };
        })
        .slice(0, 5)
  );
  return trendingVideos;
};
