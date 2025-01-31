"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  const imageInput = useRef();
  const [selectedImage, setSelectedImage] = useState(null);

  const imageChangeHandler = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const fr = new FileReader();

      fr.onload = () => {
        setSelectedImage(fr.result);
      };

      fr.readAsDataURL(event.target.files[0]);
	  return;
    }

    setSelectedImage(null);
  };

  const triggerFileInput = () => {
    imageInput.current.click();
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={imageChangeHandler}
          className={styles.input}
          id={name}
          name={name}
          ref={imageInput}
          required
        />
        <button
          type="button"
          onClick={triggerFileInput}
          className={styles.button}
        >
          Select Image
        </button>
      </div>
      <div className={styles.preview}>
        {selectedImage ? (
          <Image src={selectedImage} alt="Preview" fill />
        ) : (
          <p>No image selected</p>
        )}
      </div>
    </div>
  );
};

export default ImagePicker;
