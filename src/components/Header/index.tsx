import styles from "./header.module.scss";
import Logo from "/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="https://github.com/ander0308/" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/anderson-santana3/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
