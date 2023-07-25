import { Box, Button, Input, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [userPass, setUserPass] = useState("");
  const [show, setShow] = useState(false);
  const [lowerTest, setLowerTest] = useState(false);
  const [upperTest, setUpperTest] = useState(false);
  const [specialTest, setSpecialTest] = useState(false);
  const [numberTest, setNumberTest] = useState(false);
  const [passStrength, setPassStrength] = useState("Weak");

  const handleChange = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleInputChange = (e) => {
    setUserPass(e.target.value);
    // setLowerTest(false);
    // setNumberTest(false);
    // setUpperTest(false);
    // setSpecialTest(false);
    const inputString = e.target.value;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const specialCharsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~`]/;
    const numberRegex = /\d/;

    // if (lowercaseRegex.test(inputString)) {
    //   setLowerTest(true);
    //   console.log("herefs");
    // }

    // if (uppercaseRegex.test(inputString)) {
    //   setUpperTest(true);
    // }

    // if (specialCharsRegex.test(inputString)) {
    //   setSpecialTest(true);
    // }

    // if (numberRegex.test(inputString)) {
    //   setNumberTest(true);
    // }
  };

  const checkLowerCase = () => {
    const lowercaseRegex = /[a-z]/;
    if (lowercaseRegex.test(userPass)) {
      return true;
    }
    return false;
  };

  const checkUpperCase = () => {
    const uppercaseRegex = /[A-Z]/;
    if (uppercaseRegex.test(userPass)) {
      return true;
    }
    return false;
  };

  const checkSpecialChars = () => {
    const specialCharsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~`]/;
    if (specialCharsRegex.test(userPass)) {
      return true;
    }
    return false;
  };

  const checkNumber = () => {
    const numberRegex = /\d/;
    if (numberRegex.test(userPass)) {
      return true;
    }
    return false;
  };

  const checkLength = () => {
    if (userPass.length >= 8) {
      return true;
    }
    return false;
  };

  const checkPassStrength = () => {
    const strengthArray = [];

    if (checkUpperCase()) {
      strengthArray.push(true);
    }
    if (checkLowerCase()) {
      strengthArray.push(true);
    }
    if (checkSpecialChars()) {
      strengthArray.push(true);
    }
    if (checkNumber()) {
      strengthArray.push(true);
    }
    if (checkLength()) {
      strengthArray.push(true);
    }

    if (strengthArray.length === 2) {
      return "Weak";
    }

    if (strengthArray.length > 2 && strengthArray.length < 5) {
      return "Medium";
    }

    if (strengthArray.length === 5) {
      return "Strong";
    }

    return "Weak";
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#101827",
        color: "white",
      }}
    >
      <section style={{ boxSizing: "border-box", backgroundColor: "#101827" }}>
        <input
          placeholder="Enter you password"
          value={userPass}
          onChange={handleInputChange}
          type={show ? "text" : "password"}
          style={{
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            width: "15rem",
            backgroundColor: "#1e2937",
            border: "none",
            outline: "none",
            borderRadius: "0.375rem",
            fontSize: "1.3rem",
            color: "white",
            opacity: 1,
          }}
        />
        <div
          className="buttons"
          style={{
            display: "flex",

            marginTop: "1.25rem",
          }}
        >
          <button
            style={{
              backgroundColor: "#2464eb",
              color: "#f3f4f6",
              border: "none",
              outline: "none",
              cursor: "pointer",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              borderRadius: "0.375rem",
              marginRight: "1.25rem",
              fontSize: "100%",
              fontWeight: 600,
            }}
            onClick={handleChange}
          >
            Hide/show
          </button>
          <button
            style={{
              backgroundColor: "#2464eb",
              color: "#f3f4f6",
              border: "none",
              outline: "none",
              cursor: "pointer",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              borderRadius: "0.375rem",
              fontSize: "100%",
              fontWeight: 600,
            }}
            onClick={() => setUserPass("")}
          >
            Clear
          </button>
        </div>
        <div style={{ marginTop: "1.25rem" }}>
          <h5 style={{ margin: 0, fontSize: "1rem" }}>
            Password should contain:
          </h5>
          <ul style={{ margin: 2, padding: 0, fontSize: "1rem" }}>
            <li style={{ color: checkUpperCase() ? "#48de80" : "#f87171" }}>
              Uppercase Characters
            </li>
            <li style={{ color: checkLowerCase() ? "#48de80" : "#f87171" }}>
              Lowercase Characters
            </li>
            <li style={{ color: checkSpecialChars() ? "#48de80" : "#f87171" }}>
              Special Characters (#, /, $, etc)
            </li>
            <li style={{ color: checkNumber() ? "#48de80" : "#f87171" }}>
              Numbers
            </li>
            <li style={{ color: checkLength() ? "#48de80" : "#f87171" }}>
              Length should be greater than 8
            </li>
          </ul>

          <div
            style={{
              padding: "0.65rem",
              backgroundColor: "rgb(30, 41, 55)",
              borderRadius: "0.375rem",
              marginTop: "1.25rem",
            }}
          >
            <p
              style={{
                color:
                  checkPassStrength() === "Weak"
                    ? "#f87171"
                    : checkPassStrength() === "Medium"
                    ? "#fbcc14"
                    : "#48de80",
                margin: 0,
                padding: 0,
              }}
            >
              Strength:{checkPassStrength()}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
