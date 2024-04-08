"use client";

import React from "react";
import styles from "./form.module.css";
import Button from "../Button/Button";
import { handleForm } from "@/app/action";
const form = () => {
  return (
    <div className={styles.form}>
      <form action={handleForm}>
        <div className={styles.input}>
          <label htmlFor="city">
            *City Name, Country Code:
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter a City Name, (a Country Code)"
            />
          </label>
          <button className={styles.button}> Search </button>
        </div>
      </form>
    </div>
  );
};

export default form;
