import { Crawlers } from '../../crawlers';
import { db } from '../../db';
import { Topics } from '../enums';
import { DefaultData } from '../interfaces';

export const handleSuccess = async (
  crawler: Crawlers,
  topic: Topics,
  items: DefaultData[],
) => db.save({ crawler, topic, items });

export const handleError = (error: any, crawler: Crawlers) =>
  console.error({ crawler, date: new Date(), error });
