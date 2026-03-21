import styles from "./footer.module.scss";
import pkg from "../../../package.json";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        desenvolvido por: <span>Anderson Santana</span>
      </p>
      <p className={styles.version}>versão: {pkg.version}</p>
      <p>
        {currentYear} - todos os direitos reservados
      </p>
    </footer>
  );
};

export default Footer;
