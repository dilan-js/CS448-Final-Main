import React, { useState, useEffect } from "react";
import {
  Button,
  FloatingLabel,
  Form
} from "react-bootstrap";


import CustomNavbar from "../../components/CustomNavbar";


export default function Page10({dispatchPageIndex}) {
  const [checked, setChecked] = useState(false);
  const [startDate] = useState(new Date());
  const [textValue, setTextValue] = useState("");


  const handleSubmit = () => {
    const endDate = new Date();
    const elapsedTime = endDate.getTime() - startDate.getTime();
    console.log({elapsedTime});
    dispatchPageIndex({type: 'next'});
  }

  const handleOnChange = (e) => {
    setTextValue(e.target.value);
    console.log({textValue});
  }

  return (
    <>
      <CustomNavbar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={styles.directions}>
          Question 1: What is bar B in terms of bar A?
        </div>
        <div style={styles.main}>
        <Form onSubmit={handleSubmit}>
          <div style={styles.form}>

        <FloatingLabel controlId="floatingTextarea2" label="Enter your answer here">
        <Form.Control
          as="textarea"
          onChange={handleOnChange}
          placeholder="Enter your answer here"
          style={{ height: 100, width: 200, resize: 'none' , fontSize: 20}}
        />
        </FloatingLabel>
        </div>
         <Button
          type="submit"
          style={styles.button}
          variant={textValue !== "" ? "primary" : "secondary"}
        >
          {textValue !== "" ? "Submit & Continue" : "Submit & Continue"}
        </Button>
        </Form>

         
        </div>
       
      </div>
    </>
  );
}

const styles = {
  parent: {
    backgroundColor: "black",
    height: "100vh",
    zIndex: 100,
  },
  main: {
    paddingTop: 100,
    paddingLeft: "5%",
    paddingRight: "5%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: '100%'
  },
  main1: {
    display: "flex",
    flexDirection: "column",
  },
  form:{
    marginLeft: 30
  },
  formDiv: {
    flexDirection: "column",
    width: "100%",
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
  subDirections: {
    fontSize: 20,
    paddingTop: 10,
  },
  img: {
    width: 70,
    height: 70,
  },
  answerButton: {
    height: 100,
    width: 100,
    margin: 0,
    padding: 0,
    backgroundColor: "#f8f8f8",
    color: "black",
    fontWeight: 700,
    border: "none",
    boxShadow: "2px 2px 1px 1px #d8d8d8",
    marginLeft: 5,
    marginRight: 5,
  },
  buttonGroupDiv: {
    flexWrap: "wrap",
  },

  hidden: {
    display: "none",
  },
};
