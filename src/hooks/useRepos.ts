import axios from "axios";
import React from "react";
import { TRepos } from "../types/repos";
import mockData from "../../mock.json";

function useRepos(username: string) {
  const [repos, setRepos] = React.useState<TRepos[]>([]);


  React.useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos?sort=created&direction=desc&per_page=9`
        );
        setRepos(response.data);

        // Usado o mock para ambientes de dev para evitar requisições desnecessárias durante o desenvolvimento:
        // setRepos(mockData as TRepos[]);
      } catch (error) {
        console.error("Error fetching repositories from GitHub, using mocked data:", error);
        setRepos(mockData as TRepos[]);
      }
    }
    fetchRepositories();
  }, [username]);

  return repos;
}

export default useRepos;
