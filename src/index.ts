import dotenv from 'dotenv';

import { db } from './db';
import { startGithub } from './crawlers/github';
import { startG1 } from './crawlers/g1';
import { startYoutube } from './crawlers/youtube';

dotenv.config();

const start = async () => {
  console.log('## Process start at', new Date().getTime());
  await db.connect();
  console.log('deleting older documents...');
  await db.deleteAll();
  await startGithub();
  await startYoutube();
  await startG1();
  console.log('## Process end at', new Date().getTime());
};

start()
  .then(() => process.exit())
  .catch(err => {
    console.error(err);
    process.exit();
  });
