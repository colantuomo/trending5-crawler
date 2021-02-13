import mongoose from 'mongoose';

import { Crawlers } from '../crawlers';
import { DefaultData } from '../common/interfaces';
import { Topics } from '../common/enums';
import { TopicsModel } from './model';

export interface CrawlerData {
  crawler: Crawlers;
  topic: Topics;
  items: DefaultData[];
  date?: Date;
}

const connect = () => {
  return mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

const deleteAll = async () => {
  return await TopicsModel.deleteMany({});
};

const save = (data: CrawlerData) => {
  data.date = !data.date ? new Date() : data.date;
  console.log(`Saving ${data.crawler} / ${data.topic}...`);
  return new TopicsModel(data).save();
};

export const db = {
  connect,
  save,
  deleteAll,
};
