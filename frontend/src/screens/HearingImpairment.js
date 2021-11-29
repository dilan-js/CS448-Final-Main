import React, { useState } from "react";
import { ButtonGroup, ToggleButton, Button } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";

import { useHistory } from "react-router-dom";
import api from '../global/api';

export default function Page3() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("No");
  const radios = [
    { name: "Yes", value: "Yes" },
    { name: "No", value: "No" },
  ];

  console.log({ radioValue });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isImpaired = e.target.value === 'Yes';
    api
      .post(`handleImpairment`, {impairment: 'hearing', userId: localStorage.getItem("userId"), isImpaired})
      .then((res) => {
        console.log({res});
        history.push(isImpaired ? "/hearingex" : "/page7");
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
      <div style={styles.directions}>Are you hearing impaired?</div>
      <div style={styles.main}>
        <ButtonGroup style={styles.buttonGroupDiv}>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-danger"}
              name="radio"
              value={radio.value}
              onChange={handleSubmit}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
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
