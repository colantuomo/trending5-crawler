import { DefaultData } from "../../../common/interfaces";

export interface GithubTrending extends DefaultData {
  description: string;
  language: string;
  stars: string;
}
