import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Form.module.css";

const LoginForm = () => {
  const [inputState, setInputState] = useState({
    fullName: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  //   const [inputValidation, setInputValidation] = useState({
  //     fullName: "",
  //     email: "",
  //     number: "",
  //     password: "",
  //     confirmPassword: "",
  //   });

  const [state, setState] = useState("");

  //    useEffect(() => {
  //     fetchData();
  //    }, []);

  console.log(state);

  const fetchData = async () => {
    await axios
      .post("http://127.0.0.1:5000/api/v1/login", {
        fullName: inputState.fullName,
        email: inputState.email,
        number: inputState.number,
        password: inputState.password,
        confirmPassword: inputState.confirmPassword,
      })
      .then((res) => res)
      .then((data) => {
        console.log(data.data.user);
        setState(data.data);
      });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputState({
      ...inputState,
      [name]: value,
    });
  };

  useEffect(() => {
    // checkValidation();
  }, [inputState]);

  const submitHandler = (e) => {
    e.preventDefault();
    fetchData();
    setInputState("");
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={submitHandler}>

        <div className={styles.email}>
          <h5 className={styles.text}>Email Address</h5>
          <input
            type="email"
            name="email"
            value={inputState.email}
            placeholder="Email Address"
            onChange={(e) => changeHandler(e)}
            className={styles.input}
          />
        </div>

        <div className={styles.password}>
          <h5 className={styles.text}>Password</h5>
          <input
            type="password"
            name="password"
            value={inputState.password}
            placeholder="Password"
            onChange={(e) => changeHandler(e)}
            required
            className={styles.input}
          />
          {/* {inputValidation.password && <p>{inputValidation.password}</p>} */}
        </div>
        <button
          type="submit"
          className={styles.formBtn}
          onSubmit={submitHandler}>
          Login
        </button>
      
      </form>
    </div>
  );
};

export default LoginForm;
