import React, { useState, useEffect } from 'react'
import axios from 'axios'
 import {Link} from 'react-router-dom'
import styles from './Form.module.css'



const Form = () => {
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
       await axios.post("http://127.0.0.1:5000/api/v1/signup", {
           fullName:inputState.fullName,
           email:inputState.email,
           number:inputState.number,
           password:inputState.password,
           confirmPassword:inputState.confirmPassword
       }).then((res) => (res)).then((data) => {
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

//   const checkValidation = () => {
//     let errors = JSON.parse(JSON.stringify(inputValidation));

//     //   validation
//     if (!inputState.fullName.trim()) {
//       errors.fullName = "First name is required";
//     } else {
//       errors.fullName = "";
//     }

//     if (!inputState.number.trim()) {
//       errors.number = "number is required";
//     } else {
//       errors.number = "";
//     }

//     const emailVal =
//       "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
//     if (!inputState.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!inputState.email.match(emailVal)) {
//       errors.email = "Please input a valid email address";
//     } else {
//       errors.email = "";
//     }

//     //password validation
//     const passwordVal1 = "/^(?=.*[a-z]).{6,20}$/";
//     const passwordVal2 = "/^(?=.*[A-Z]).{6,20}$/";
//     const passwordVal3 = "/^(?=.*[0-9]).{6,20}$/";
//     const password = inputState.password;
//     if (!password) {
//       errors.password = "password is required";
//     } else if (password.length < 6) {
//       errors.password = "Password must be longer than 6 characters";
//     } else if (password.length >= 20) {
//       errors.password = "Password must shorter than 20 characters";
//     } else if (!password.match(passwordVal1)) {
//       errors.password = "Password must contain at least one lowercase";
//     } else if (!password.match(passwordVal2)) {
//       errors.password = "Password must contain at least one capital letter";
//     } else if (!password.match(passwordVal3)) {
//       errors.password = "Password must contain at least a number";
//     } else {
//       errors.password = "";
//     }

//     //matchPassword validation
//     if (!inputState.confirmPassword) {
//       errors.confirmPassword = "Password confirmation is required";
//     } else if (inputState.confirmPassword !== inputState.password) {
//       errors.confirmPassword = "Password does not match confirmation password";
//     } else {
//       errors.password = "";
//     }

//     setInputValidation(errors);
//   };

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
        <div className={styles.name}>
          <h5 className={styles.text}>Fullname</h5>
          <input
            type="text"
            name="fullName"
            value={inputState.fullName}
            placeholder="fullname"
            onChange={(e) => changeHandler(e)}
            className={styles.input}
          />
          {/* {inputValidation.fullName && <p>{inputValidation.fullName}</p>}
          {inputValidation.fullName && console.log(inputValidation)} */}
        </div>

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
          {/* {inputValidation.email && <p>{inputValidation.email}</p>} */}
        </div>

        <div className={styles.number}>
          <h5 className={styles.text}>Mobile Number</h5>
          <input
            type="number"
            name="number"
            value={inputState.number}
            placeholder="Mobile Number"
            onChange={(e) => changeHandler(e)}
            className={styles.input}
          />
          {/* {inputValidation.number && <p>{inputValidation.number}</p>} */}
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

        <div className={styles.confirmPassword}>
          <h5 className={styles.text}>Confirm Password</h5>
          <input
            type="password"
            name="confirmPassword"
            value={inputState.confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => changeHandler(e)}
            required
            className={styles.input}
          />
          {/* {inputValidation.confirmPassword && (
                        <p>{inputValidation.confirmPassword}</p>
                    )} */}
        </div>

        <p>Agree To The Terms And Conditions</p>
        <button
          type="submit"
          className={styles.formBtn}
          onSubmit={submitHandler}
        >
          Sign Up
        </button>
        <span className={styles.formInputLogin}>
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
}

    export default Form;
