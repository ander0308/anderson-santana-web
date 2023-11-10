import styles from "./socials.module.scss";

import iconInstagram from "../../assets/bxl-instagram.svg";
import iconGithub from "../../assets/bxl-github.svg";
import iconLinkedin from "../../assets/linkedin.svg";
import iconGmail from "../../assets/gmail.svg";

const Socials = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.titleSocials}
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <h2>Redes Sociais.</h2>
        <span>Entre em contato :)</span>
      </div>
      <ul data-aos="fade-left" data-aos-duration="1500">
        <li>
          <a href="https://github.com/ander0308/" target="_blank">
            <img src={iconGithub} alt="github" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/anderson-santana3/"
            target="_blank"
          >
            <img src={iconLinkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="mailto:ander0308@gmail.com" target="_blank">
            <img src={iconGmail} alt="gmail" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/and_santana3/" target="_blank">
            <img src={iconInstagram} alt="instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
