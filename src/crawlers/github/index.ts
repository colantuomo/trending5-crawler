import { trendings } from "./topics/trendings";
import { Crawlers } from "..";
import { handleSuccess, handleError } from "../../common/handles";
import { Topics } from "../../common/enums";

export const startGithub = () => {
  trendings()
    .then((items) => handleSuccess(Crawlers.Github, Topics.Trending, items))
    .catch((error) => handleError(error, Crawlers.Github));
};
