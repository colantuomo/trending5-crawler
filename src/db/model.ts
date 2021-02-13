import { Schema, model } from 'mongoose';

const Items = new Schema({
  title: String,
  description: String,
  link: String,
  img: String,
});
const schema = new Schema({
  crawler: String,
  topic: String,
  items: [Items],
  date: Date,
});
const TopicsModel = model('topics', schema);
export { TopicsModel };
