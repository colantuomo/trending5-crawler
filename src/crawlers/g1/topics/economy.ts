import { launch } from 'puppeteer';
import { DefaultData } from '../../../common/interfaces';

const G1_ECONOMY = 'https://g1.globo.com/economia/';

export const economy = async (): Promise<DefaultData[]> => {
  const browser = await launch();
  const page = await browser.newPage();
  await page.goto(G1_ECONOMY);
  const header = await page.$$eval('.feed-post-body-title ._b a', el =>
    el
      .map(x => {
        return { title: x.textContent.trim(), link: x.getAttribute('href') };
      })
      .slice(0, 5),
  );
  const descriptions = await page.$$eval('.feed-post-body-resumo', el =>
    el.map(x => x.textContent.trim()),
  );
  const imgs = await page.$$eval('.feed-media-wrapper img', el =>
    el.map(x => x.getAttribute('src')).slice(0, 5),
  );
  await browser.close();
  const data = header.map(({ title, link }, idx) => {
    const description = descriptions[idx];
    const img = imgs[idx];
    return { title, description, link, img };
  });
  return data;
};
