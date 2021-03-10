import { Octokit } from '@octokit/rest';
import { UserType } from '../types';

const octokit = new Octokit();

export async function GetUser(username: string): Promise<UserType> {
  return octokit.users.getByUsername({ username: username });
}
