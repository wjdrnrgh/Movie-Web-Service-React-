import styles from "../css/Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <div>
        <a href="/">
          <img
            src="https://yts.mx/assets/images/website/logo-YTS.svg"
            alt="Logo"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
