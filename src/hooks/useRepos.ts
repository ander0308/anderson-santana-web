import axios from "axios";
import React from "react";
// import mockData from "../../mock.json";

function useRepos(username: string) {
  const [repos, setRepos] = React.useState<any[]>([]);


  React.useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos?sort=created&direction=desc&per_page=9`
        );
        setRepos(response.data);

        // Usado o mock para ambientes de dev para evitar requisições desnecessárias durante o desenvolvimento:
        // setRepos(mockData as any[]);
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      }
    }
    fetchRepositories();
  }, [username]);

  return repos;
}

export default useRepos;
