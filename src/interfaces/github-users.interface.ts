import { GithubUser } from "./github-user.interfaces";

export interface GithubUsersResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GithubUser[];
}
