import React, { useState, useEffect } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import CustomNavbar from "../../components/CustomNavbar";

import { useHistory } from "react-router-dom";
import api from '../../global/api';
export default function BeginPage({setQuestions}) {
  const [checked, setChecked] = useState(false);
  const [successfulRetrieval, setSuccessfulRetrieval] = useState(false);
  const history = useHistory();

  useEffect(() => {
      const userId = localStorage.getItem("userId");
      const groupCode = localStorage.getItem("groupCode");
      api
      .get(`retrieveQuestions/${userId}/${groupCode}`)
      .then((res) => {
        console.log({res});
        setSuccessfulRetrieval(true);
        setQuestions(res.data.questionArray);
        // localStorage.setItem("userInfo", JSON.stringify(userInfo));
        // setLocalSuccess(true);
        // console.log("ALL GOOD");
        // history.push("/overview");
        // setIsSuccess(true);
      })
      .catch(() =>{
        console.log("ERROR");
      })

  }, []);

  const handleSubmit = () => {
    if(successfulRetrieval){
        history.push("/test");
    }else return;
  }


  return (
    <div>
      <CustomNavbar />
      <div style={styles.directions}>Directions</div>
      <div style={styles.subDirections}>
        This is the beginning of the experiment.<br/>
        Click 'Continue' to start.
      </div>
      <div style={styles.main}>
        <Button
          onClick={() => handleSubmit()}
          style={styles.button}
          variant="primary"
        >
          Continue
        </Button>
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
    fontSize: 25,
    paddingTop: 10,
  },
};
