import { Octokit } from "@octokit/rest";
import { Repo } from '../interfaces/Repo';

const octokit = new Octokit();

let cache: Repo[] = [];
let cached_at: number = 0;

export async function GetRepos(username: string): Promise<Repo[]> {
  const currentTime: number = new Date().getTime();

  if (currentTime - cached_at < 3600000) {
    return cache
  } else {
    return octokit.repos.listForUser({ username: username })
      .then((response: any) => {
        cache = response.data;
        cached_at = currentTime;
        return cache
      })
      .catch(() => {
        return cache
      });
  }
}