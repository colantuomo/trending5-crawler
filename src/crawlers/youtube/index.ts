import { trendings } from "./topics/trendings";
import { YTTopics } from "./interfaces";
import { handleSuccess, handleError } from "../../common/handles";
import { Crawlers } from "..";

export const startYoutube = () => {
  trendings()
    .then((items) => handleSuccess(Crawlers.Youtube, YTTopics.Trending, items))
    .catch((error) => handleError(error, Crawlers.Youtube));
};
