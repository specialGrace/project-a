import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  // const [state, setState] = useState("");

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log(state);

  // const fetchData = async () => {
  //   const { data } = await axios.get("http://127.0.0.1:5000/user");
  //   setState(data);
  // };

  return (
    <div className="App">
      {/* <div>
        <h2>Hello</h2>
      </div> */}
      <Form />
    </div>
  );
}

export default App;
