export enum GHTopics {
  Trending = "trending",
}

export interface GithubData {
  topic: GHTopics;
  date: Date;
  items: any[];
}

export interface GithubTrending {
  name: string;
  description: string;
  language: string;
  stars: string;
}
