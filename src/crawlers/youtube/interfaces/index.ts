export enum YTTopics {
  Trending = "trending",
}

export interface YoutubeData {
  topic: YTTopics;
  date: Date;
  items: any[];
}
