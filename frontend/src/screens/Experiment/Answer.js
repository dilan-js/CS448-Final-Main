import React, { useState, useEffect } from "react";
import {
  Image,
  Button,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";

import CustomNavbar from "../../components/CustomNavbar";

import api from '../../global/api';
import Graph from "../../assets/as3.png";
import radios from '../../global/radios';
import {useAudioPlayer} from "react-use-audio-player";

export default function Answer({dispatchQuestionIndex, questionIndex, setCurrentStep, question }) {
  const {questionTitle="", _id ="" } = question || {};
  const [checked, setChecked] = useState(false);
  const [startDate] = useState(new Date());
  const [radioValue, setRadioValue] = useState("");

  useAudioPlayer({
    src: "",
    format: "wav",
});

 

  console.log({ radioValue });

  const handleSubmit = () => {
    const endDate = new Date();
    const answerTimer = endDate.getTime() - startDate.getTime();
    console.log({answerTimer});
    const payload = {
      user: localStorage.getItem("userId"),
      question: question._id,
      answerValue: parseInt(radioValue), 
      answerTimer
    }
    api.post("submitAnswer", payload).then((res) => {
      setCurrentStep("Question");
      dispatchQuestionIndex({type: 'next'});
    });
  }


  return (
    <>
      <CustomNavbar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={styles.directions}>
        Question {questionIndex+1}: {questionTitle}
        </div>
        <div style={styles.main}>
          <ButtonGroup style={styles.buttonGroupDiv}>
            {radios.map((radio, idx) => (
              <ToggleButton
                style={{
                  // backgroundColor: "#f4f4f4",
                  boxShadow: "2px 2px 1px 1px #d8d8d8",
                  margin: 5,
                  color: "black",
                  fontWeight: "700",
                  width: 100,
                  maxWidth: 100,
                }}
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? "outline-primary" : "outline-primary"}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name !== "?" ? (
                  <>
                    <Image style={styles.img} src={radio?.image} />
                    <div>{radio.name}</div>
                  </>
                ) : (
                  <div
                    style={{
                      height: "100%",
                      fontSize: 24,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    {radio.name}
                  </div>
                )}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
        <Button
          onClick={handleSubmit}
          style={styles.button}
          variant={radioValue !== "No" ? "primary" : "secondary"}
        >
          {radioValue !== "No" ? "Submit & Continue" : "Submit & Continue"}
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
    flexDirection: "row",
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
