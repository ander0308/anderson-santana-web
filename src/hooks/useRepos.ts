import axios from "axios";
import React from "react";

function useRepos(username: string) {
  const [repos, setRepos] = React.useState([]);

  React.useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos?sort=created&direction=desc&per_page=9`
        );
        setRepos(response.data);
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      }
    }
    fetchRepositories();
  }, [username]);

  return repos;
}

export default useRepos;
