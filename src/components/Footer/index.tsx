import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p data-aos="fade" data-aos-duration="1500">
        desenvolvido por: <span>Anderson Santana</span>
      </p>
      <p data-aos="fade" data-aos-duration="1500">
        2023 - todos os direitos reservados
      </p>
    </footer>
  );
};

export default Footer;
