import { economy } from "./topics/economy";
import { G1Topics } from "./interfaces";
import { Crawlers } from "../";
import { handleSuccess, handleError } from "../../common/handles";

export const startG1 = () => {
  economy()
    .then((items) => handleSuccess(Crawlers.G1, G1Topics.Economy, items))
    .catch((error) => handleError(error, Crawlers.G1));
};
