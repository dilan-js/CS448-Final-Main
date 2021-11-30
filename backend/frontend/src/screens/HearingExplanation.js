import React, { useState } from "react";
import { InputGroup, Button, Form, FloatingLabel, FormControl } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";

import { useHistory } from "react-router-dom";
import api from '../global/api';
export default function HearingExplanation() {
  const [explanation, setExplanation] = useState("");
  const history = useHistory();

  const handleOnChange = (e) => {
    setExplanation(e.target.value);
    console.log({explanation});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post(`impairmentExplanation`, {impairment: 'hearing', userId: localStorage.getItem("userId"), explanation: explanation.trim()})
      .then((res) => {
        console.log({res});
        history.push( "/directions1");
        // localStorage.setItem("userInfo", JSON.stringify(userInfo));
        // setLocalSuccess(true);
        // console.log("ALL GOOD");
        // history.push("/overview");
        // setIsSuccess(true);
      })
      .catch(() =>{
        console.log("ERROR");
      })
  }

  return (
    <div>
      <CustomNavbar />
      <div style={styles.directions}>If yes, please explain:</div>
      <div style={styles.main}>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingTextarea2" label="Enter explanation here">
    <Form.Control
      as="textarea"
      onChange={handleOnChange}
      placeholder="Enter explanation here"
      style={{ height: '200px' }}
    />
  </FloatingLabel>
        <Button
          type="submit"
          style={styles.button}
          variant="primary"
        >
          Continue
        </Button>
        </Form>
      </div>
    </div>
  );
}

const styles = {
  main: {
    paddingTop: 100,
    paddingLeft: "20%",
    paddingRight: "20%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  formDiv: {
    flexDirection: "column",
    width: "100%",
  },
  nameDiv: {
    flexDirection: "column",
  },
  labelBasic: {
    width: 130,
  },
  input: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 8,
    paddingBottom: 8,
    fontWeight: 500,
    fontSize: 20,
    marginTop: 20,
  },
  directions: {
    paddingTop: 100,
    fontSize: 30,
    fontWeight: 700,
  },
};
