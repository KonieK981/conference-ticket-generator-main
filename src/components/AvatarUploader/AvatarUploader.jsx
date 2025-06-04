import React, { useRef, useState } from "react";
import styles from "./styles.module.css";

const AvatarUploader = ({ label, image, setImage, errorMsg }) => {
  const fileInputRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [localError, setLocalError] = useState(""); // Solo este para errores locales

  const MAX_SIZE = 500 * 1024; // 500KB

  const handleFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setLocalError("Only image files are allowed.");
      setImage(null);
      fileInputRef.current.value = null;
      return;
    }
    if (file.size > MAX_SIZE) {
      setLocalError("File too large. Please upload a photo under 500KB.");
      setImage(null);
      fileInputRef.current.value = null;
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      setLocalError("");
    };
    reader.readAsDataURL(file);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const onChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const removeImage = () => {
    setImage(null);
    setLocalError("");
    fileInputRef.current.value = null;
  };

  const handleUploadClick = () => {
    setLocalError("");
    if (!image) {
      fileInputRef.current.value = null;
      fileInputRef.current.click();
    }
  };

  return (
    <div className={styles.upload}>
      <label className={styles.label}>{label}</label>
      <div
        className={`${styles.groupUpload} ${dragging ? styles.dragging : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={handleUploadClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleUploadClick();
          }
        }}
        tabIndex={0}
        role="button"
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={onChange}
          accept="image/*"
          style={{ display: "none" }}
        />

        {image ? (
          <div className={styles.avatarContainer}>
            <img
              src={image}
              alt="Avatar Preview"
              className={styles.avatarImg}
            />
            <div className={styles.buttonGroup}>
              <button
                type="button"
                className={styles.removeBtn}
                onClick={removeImage}
              >
                Remove Image
              </button>
              <button
                type="button"
                className={styles.changeBtn}
                onClick={() => fileInputRef.current.click()}
              >
                Change image
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.imgUpload}>
              <img src="assets/images/icon-upload.svg" alt="Upload" />
            </div>
            <p>Drag and drop or click to upload</p>
          </>
        )}
      </div>
      <p className={styles.info}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              stroke={localError || errorMsg ? "#f57261" : "#D1D0D5"}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
            />
            <path
              fill={localError || errorMsg ? "#f57261" : "#D1D0D5"}
              d="M8.004 10.462V7.596ZM8 5.57v-.042Z"
            />
            <path
              stroke={localError || errorMsg ? "#f57261" : "#D1D0D5"}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.004 10.462V7.596M8 5.569v-.042"
            />
          </svg>
        </span>
        <span className={localError || errorMsg ? styles.errorMsg : ""}>
          {localError ||
            errorMsg ||
            "Upload your photo (JPG or PNG, max size: 500KB)."}
        </span>
      </p>
    </div>
  );
};

export default AvatarUploader;
