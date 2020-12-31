import { Crawlers } from "../crawlers";
import { DefaultData } from "../common/interfaces";

export interface CrawlerData {
  crawler: Crawlers;
  topic: any;
  items: DefaultData[];
  date?: Date;
}

const save = (data: CrawlerData) => {
  data.date = !data.date ? new Date() : data.date;
  console.log(data);
};

export const db = {
  save,
};
