"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();
  function ImageInputHandler() {
    imageInput.current.click();
  }
  function ImageChangeHandler(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPickedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPickedImage(null);
    }
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image selected</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="Selected image" fill></Image>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={ImageChangeHandler}
          required
        ></input>
        <button className={classes.button} onClick={ImageInputHandler}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
