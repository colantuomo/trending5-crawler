import { DefaultData } from "../../../common/interfaces";

export enum GHTopics {
  Trending = "trending",
}

export interface GithubTrending extends DefaultData {
  description: string;
  language: string;
  stars: string;
}
