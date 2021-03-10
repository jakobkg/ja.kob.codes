import { Octokit } from '@octokit/rest';
import { GetResponseTypeFromEndpointMethod } from '@octokit/types';

const octokit = new Octokit();

export type RepoListResponseType = GetResponseTypeFromEndpointMethod<
  typeof octokit.repos.listForUser
>;
export type RepoType = GetResponseTypeFromEndpointMethod<
  typeof octokit.repos.get
>;
export type UserType = GetResponseTypeFromEndpointMethod<
  typeof octokit.users.getByUsername
>;
