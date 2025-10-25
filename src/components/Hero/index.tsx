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
          “ Com mais de uma década na área de tecnologia, evolui de
          infraestrutura de TI para o desafiador papel de desenvolvedor de
          software, dedicando-me há cinco anos. Atualmente como Software
          Engineer no Mercado Livre, foco em soluções inovadoras usando React,
          Typescript e Javascript entre outras, centrando-me em projetos
          robustos com Microfrontends e integração de APIs. Atuo como Ui
          Designer e Desenvolvedor freelance, com experiência em tecnologias
          como HTML, CSS, JavaScript, Typescript, React.JS, Node.JS, Docker, Git
          e bancos de dados. Busco continuamente aprimorar minha criatividade em
          interfaces envolventes, sempre em busca de novos desafios e
          aprendizado constante! 👨🏽‍💻. ”
        </p>
      </div>
    </div>
  );
};

export default Hero;
