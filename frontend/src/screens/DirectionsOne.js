import React, { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";

import { useHistory } from "react-router-dom";

export default function DirectionsOne() {
  const [checked, setChecked] = useState(false);
  const history = useHistory();
  return (
    <div>
      <CustomNavbar />
      <div style={styles.directions}>Directions</div>
      <div style={styles.subDirections}>
        We are going to begin the tutorial for the experiment. There will be 2
        sample exercises.
      </div>
      <div style={styles.main}>
        <Button
          onClick={() => history.push("/directions2")}
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
