import { trendings } from "./topics/trendings";
import { GHTopics } from "./interfaces";
import { db } from "./db";
import { Crawlers } from "..";

const handleSuccess = (topic: GHTopics, items: any[]) =>
  db.save({ topic, date: new Date(), items });

const handleError = (error: any) =>
  console.error({ crawler: Crawlers.Github, date: new Date(), error });

export const startGithub = () => {
  trendings()
    .then((items) => handleSuccess(GHTopics.Trending, items))
    .catch(handleError);
};
