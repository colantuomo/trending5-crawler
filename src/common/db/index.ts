import { Crawlers } from "../../crawlers";

export interface CrawlerData {
  crawler: Crawlers;
  topic: any;
  items: any[];
  date?: Date;
}

const save = (data: CrawlerData) => {
  data.date = !data.date ? new Date() : data.date;
  console.log(data);
};

export const db = {
  save,
};
