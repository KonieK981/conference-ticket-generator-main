import React, { useRef, useState } from "react";
import styles from "./styles.module.css";

const AvatarUploader = () => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
    fileInputRef.current.value = null;
  };

  return (
    <div className={styles.upload}>
      <label className={styles.label}>Upload Avatar</label>
      <div
        className={`${styles.groupUpload} ${dragging ? styles.dragging : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => !image && fileInputRef.current.click()}
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
              <img src="/assets/images/icon-upload.svg" alt="Upload" />
            </div>
            <p>Drag and drop or click to upload</p>
          </>
        )}
      </div>
      <p className={styles.info}>
        <img src="/assets/images/icon-info.svg" alt="" />
        Upload your photo (JPG or PNG, max size: 500KB).
      </p>
    </div>
  );
};

export default AvatarUploader;
