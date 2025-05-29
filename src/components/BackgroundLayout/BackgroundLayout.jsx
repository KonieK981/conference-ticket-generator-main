import styles from "./styles.module.css";

function BackgroundLayout() {
  return (
    <div>
      <div className={styles.topCenter}>
        <img src="/assets/images/pattern-lines.svg" alt="Top Center" />
      </div>
      <div className={styles.topRight}>
        <img
          src="/assets/images/pattern-squiggly-line-top.svg"
          alt="Top Right"
        />
      </div>
      <div className={styles.bottomLeft}>
        <img
          src="/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
          alt="Bottom Left"
        />
      </div>
    </div>
  );
}

export default BackgroundLayout;
