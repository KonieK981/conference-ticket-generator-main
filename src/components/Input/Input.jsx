import styles from "./styles.module.css";

function Input({
  errorMsg,
  id,
  label,
  name,
  onBlur,
  onChange,
  placeholder,
  touched,
  type,
  value,
}) {
  return (
    <label className={styles.groupLabel}>
      {label}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={touched && errorMsg ? { border: "1px solid #f57261" } : {}}
      />

      <span className={touched && errorMsg ? styles.error : styles.hidden}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            stroke="#f57261"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
          />
          <path fill="#f57261" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
          <path
            stroke="#f57261"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.004 10.462V7.596M8 5.569v-.042"
          />
        </svg>
        {errorMsg}
      </span>
    </label>
  );
}

export default Input;
