import { RepoListResponseType } from '../types';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

export async function GetRepos(username: string): Promise<RepoListResponseType> {
  return (await octokit.repos.listForUser({username: username}));
}