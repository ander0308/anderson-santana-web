import styles from "./header.module.scss";
import Logo from "/logo.svg";

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const Header = ({ theme, onToggleTheme }: HeaderProps) => {
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
        <button
          className={styles.themeToggle}
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
