import { economy } from "./topics/economy";
import { db } from "./db";
import { G1Topics } from "./interfaces";
import { Crawlers } from "../";

const handleSuccess = (topic: G1Topics, items: any[]) =>
  db.save({ topic, date: new Date(), items });

const handleError = (error: any) =>
  console.error({ crawler: Crawlers.G1, date: new Date(), error });

export const startG1 = () => {
  economy()
    .then((items) => handleSuccess(G1Topics.Economy, items))
    .catch(handleError);
};
