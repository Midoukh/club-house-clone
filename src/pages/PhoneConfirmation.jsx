import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style/phoneConfirmation.module.css";
import PhoneInput from "react-phone-number-input";

const PhoneCon = () => {
  const [value, setValue] = useState();

  return (
    <div className={styles.PhoneConfirmation}>
      <h1>Enter your phone</h1>
      <PhoneInput international defaultCountry="US" value={value} />
      <p>
        By entering your number, you're agreeing to our
        <span>terms of Service and Privacy Policy.</span>
      </p>
    </div>
  );
};

export default PhoneCon;
