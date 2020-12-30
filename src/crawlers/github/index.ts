import { trendings } from "./topics/trendings";
import { GHTopics } from "./interfaces";
import { Crawlers } from "..";
import { handleSuccess, handleError } from "../../common/handles";

export const startGithub = () => {
  trendings()
    .then((items) => handleSuccess(Crawlers.Github, GHTopics.Trending, items))
    .catch((error) => handleError(error, Crawlers.Github));
};
