export enum G1Topics {
  Economy = "economy",
}

export interface G1Data {
  topic: G1Topics;
  date: Date;
  items: any[];
}

export interface G1Economy {
  title: string;
  description: string;
  link: string;
}
