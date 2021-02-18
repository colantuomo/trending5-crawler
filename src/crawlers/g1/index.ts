import { economy } from './topics/economy';
import { Crawlers } from '../';
import { handleSuccess, handleError } from '../../common/handles';
import { Topics } from '../../common/enums';

export const startG1 = async () => {
  try {
    const items = await economy();
    return handleSuccess(Crawlers.G1, Topics.Economy, items);
  } catch (error) {
    handleError(error, Crawlers.G1);
    throw error;
  }
};
