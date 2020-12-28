import { GithubData } from "./interfaces";

const save = (data: GithubData) => console.log(data);

export const db = {
  save,
};
