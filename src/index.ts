import dotenv from 'dotenv';

import { db } from './db';
import { startGithub } from './crawlers/github';
import { startG1 } from './crawlers/g1';
import { startYoutube } from './crawlers/youtube';

dotenv.config();

const start = async () => {
  const start = new Date().getTime();
  console.log('## Process start. Trying to connect with mongodb.');
  await db.connect();
  console.log('## Deleting older documents...');
  await db.deleteAll();
  console.log('## Init crawlers');
  await Promise.all([
    startGithub(),
    startYoutube(),
    startG1(),
  ]);
  const end = new Date().getTime();
  console.log('## Total time: ', end - start);
};

start()
  .catch(err => {
    console.error(err);
  })
  .finally(() => process.exit());
