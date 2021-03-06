import React, { useState, useEffect } from "react";
import {
  Image,
  Button,
} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import CustomNavbar from "../../components/CustomNavbar";

import Graph from "../../assets/0dns5.png";
import AnswerExample from './AnswerExample';

export default function Page14({dispatchPageIndex}) {
  const history = useHistory();
  
  const handleSubmit = () => {
    dispatchPageIndex({type: 'next'});
  }

  return (
    <>
      <CustomNavbar />
      <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={styles.directions}>
          Question 2: How many times taller is the taller bar compared to the shorter one?
        </div>
        <div>Please enter an <span style={{fontWeight: '700'}}>numerical</span> answer to the nearest tenth decimal place.</div>
        <div style={styles.main}>
        <Image style={styles.img} src={Graph} />
        <AnswerExample answer="4.6x"/>
        </div>
        <Button
          onClick={() => history.push("/begin")}
          style={styles.button}
          variant="primary" 
        >
          Got It!
        </Button>
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
    alignItems: 'center',
    flexDirection: "column",
    flexWrap: "wrap",
  },
  main1: {
    display: "flex",
    flexDirection: "column",
  },
  formDiv: {
    flexDirection: "column",
    width: "100%",
  },
  button: {
    marginLeft: "40%",
    marginRight: "40%",
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
    zIndex: 50,
    width: 300,
    height: 300,
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
