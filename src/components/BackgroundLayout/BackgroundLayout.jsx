import styles from "./styles.module.css";

function BackgroundLayout({ children }) {
  return (
    <div className={styles.container}>
      <img
        src="assets/images/pattern-lines.svg"
        alt="Lines decoration"
        className={styles.topCenter}
      />
      <img
        src="assets/images/pattern-squiggly-line-top.svg"
        alt="Lines decoration"
        className={styles.topRight}
      />
      <img
        src="assets/images/pattern-circle.svg"
        alt="Circle decoration"
        className={styles.topCircle}
      />
      <img
        src="assets/images/pattern-circle.svg"
        alt="Circle decoration"
        className={styles.middleCircle}
      />
      <picture>
        <source
          media="(min-width:768px)"
          srcSet="assets/images/pattern-squiggly-line-bottom-desktop.svg"
        />
        <img
          src="assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
          alt=""
          className={styles.bottomLeft}
        />
      </picture>

      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default BackgroundLayout;
