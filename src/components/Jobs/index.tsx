import styles from "./jobs.module.scss";

import useRepos from "../../hooks/useRepos";

import iconGithub from "../../assets/bxl-github.svg";

type TRepos = {
  id: number;
  html_url: string;
  name: string;
};

const Jobs = () => {
  const username = "ander0308";

  const repos = useRepos(username);

  return (
    <div className={styles.container} data-aos="fade-up" data-aos-duration="1500">
      <h3>Ultimos Repositórios</h3>
      <div className={styles.jobContent}>
        {repos.map((repo: TRepos) => {
          return (
            <div className={styles.gridItem} key={repo.id}>
              <a href={repo.html_url} target="_blank">
                <img src={iconGithub} alt="" />/{repo.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
