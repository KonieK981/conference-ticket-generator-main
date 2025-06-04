import { useContext } from "react";
import styles from "./styles.module.css";
import FormCtx from "../../context/formContext";

const place = "Jan 31, 2025 / Austin, TX";

function TicketView() {
  const { formValues } = useContext(FormCtx);

  return (
    <div className={styles.main}>
      <h1>
        Congrats, <span>{formValues.name}</span> Your ticket is ready.
      </h1>
      <h4>
        We've emailed your ticket to <span>{formValues.email}</span> and will
        send updates in the run up to the event.
      </h4>

      <div className={styles.ticket}>
        <div>
          <div className={styles.leftSide}>
            <div className={styles.dateWraper}>
              <div className={styles.dateInfo}>
                <img src="/assets/images/logo-full.svg" alt="Logo" />
                <span>{place}</span>
              </div>
            </div>
            <div className={styles.userWraper}>
              <div className={styles.avatar}>
                {formValues.file && <img src={formValues.file} alt="Avatar" />}
              </div>
              <div className={styles.user}>
                <span>{formValues.name}</span>
                <span>
                  <img src="/assets/images/icon-github.svg" alt="Avatar" />
                  {formValues.gitUser}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div>
              <span>#{formValues.ticket}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketView;
