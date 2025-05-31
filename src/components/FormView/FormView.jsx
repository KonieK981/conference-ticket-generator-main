import styles from "./styles.module.css";

function FormView() {
  return (
    <div>
      <h1 className="title">
        Your Journey to Coding <br />
        Conf 2025 Starts Here!{" "}
      </h1>
      <h4 className="subtitle">
        Secure your spot at next year's biggest coding conference.
      </h4>
      <form action="" className={styles.formTicket}>
        <label className={styles.upload}>
          Upload Avatar
          <div className={styles.groupUpload}>
            <div className={styles.imgUpload}>
              <img src="/assets/images/icon-upload.svg" alt="Upload" />
            </div>
            <input type="file" />
            <p>Drag and drop or click to upload</p>
          </div>
          <p>
            <img src="/assets/images/icon-info.svg" alt="" />
            Upload your photo (JPG or PNG, max size: 500KB).
          </p>
        </label>
        <label className={styles.groupLabel}>
          Full Name
          <input type="text" name="name" id="" />
        </label>
        <label className={styles.groupLabel}>
          Email Address
          <input
            type="text"
            name="email"
            id=""
            placeholder="example@email.com"
          />
        </label>
        <label className={styles.groupLabel}>
          GitHub Username
          <input type="text" name="github" id="" placeholder="@yourusername" />
        </label>
        <button>Generate My Ticket</button>
      </form>
    </div>
  );
}

export default FormView;
