import { economy } from './topics/economy';
import { Crawlers } from '../';
import { handleSuccess, handleError } from '../../common/handles';
import { Topics } from '../../common/enums';

export const startG1 = () => {
  economy()
    .then(items => handleSuccess(Crawlers.G1, Topics.Economy, items))
    .catch(error => handleError(error, Crawlers.G1));
};
