import { Crawlers } from "../../crawlers";
import { db } from "../../db";

export const handleSuccess = (crawler: Crawlers, topic: string, items: any[]) =>
  db.save({ crawler, topic, items });

export const handleError = (error: any, crawler: Crawlers) =>
  console.error({ crawler, date: new Date(), error });
