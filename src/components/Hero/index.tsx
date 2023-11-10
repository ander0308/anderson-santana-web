import styles from "./hero.module.scss";
import imgProfile from "/photo-profile.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div
        className={styles.infoContent}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img src={imgProfile} alt="Imagem de perfil" />
        <h1>Anderson Santana</h1>
        <h2>Software Engineer </h2>
        <span>- Front-end React</span>
      </div>
      <div
        className={styles.quote}
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <span></span>
        <p>
          “ Apaixonado por tecnologia desde sempre, migrei minha carreia da área
          de infraestrutura de TI e suporte técnico, para desenvolvedor de
          software a 3 anos, atualmente estou como Software Engineer na
          Instituição Sicredi, atuando em projetos com tecnologias como React,
          Typescript, Docker, Pipelines via Gitlab, desenvolvendo projetos
          utilizando Micro frontends com Module Federation como arquitetura e
          consumo de Apis através de BFFs . ”
        </p>
      </div>
    </div>
  );
};

export default Hero;
