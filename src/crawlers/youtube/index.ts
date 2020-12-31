import { trendings } from "./topics/trendings";
import { handleSuccess, handleError } from "../../common/handles";
import { Crawlers } from "..";
import { Topics } from "../../common/enums";

export const startYoutube = () => {
  trendings()
    .then((items) => handleSuccess(Crawlers.Youtube, Topics.Trending, items))
    .catch((error) => handleError(error, Crawlers.Youtube));
};
