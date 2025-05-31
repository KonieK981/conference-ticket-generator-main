import styles from "./styles.module.css";

function TicketView() {
  return (
    <div className={styles.main}>
      <h1>
        Congrats, <span>Jonatan Kristof!</span> Your ticket is ready.
      </h1>
      <h4>
        We've emailed your ticket to <span>jonatankristof0101</span> and will
        send updates in the run up to the event.
      </h4>

      <div className={styles.ticket}>
        <div>
          <div className={styles.leftSide}>
            <div className={styles.dateWraper}>
              <div className={styles.dateInfo}>
                <img src="/assets/images/logo-full.svg" alt="Logo" />
                <span>Jan 31, 2025 / Austin, TX</span>
              </div>
            </div>
            <div className={styles.userWraper}>
              <div className={styles.avatar}>
                <img src="/assets/images/image-avatar.jpg" alt="Avatar" />
              </div>
              <div className={styles.user}>
                <span>Jonatan Kristof</span>
                <span>
                  <img src="/assets/images/icon-github.svg" alt="Avatar" />
                  @jonatankristof0101
                </span>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div>
              <span>#016009</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketView;
