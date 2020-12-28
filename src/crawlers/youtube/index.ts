import { trendings } from "./topics/trendings";
import { YTTopics } from "./interfaces";
import { db } from "./db";
import { Crawlers } from "..";

const handleSuccess = (topic: YTTopics, items: any[]) =>
  db.save({ topic, date: new Date(), items });

const handleError = (error: any) =>
  console.error({ crawler: Crawlers.Youtube, date: new Date(), error });

export const startYoutube = () => {
  trendings()
    .then((items) => handleSuccess(YTTopics.Trending, items))
    .catch(handleError);
};
