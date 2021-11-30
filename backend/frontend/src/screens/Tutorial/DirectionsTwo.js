import React, { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import CustomNavbar from "../../components/CustomNavbar";
import { useHistory } from "react-router-dom";

export default function DirectionsTwo() {
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  return (
    <div>
      <CustomNavbar />
      <div style={styles.directions}>Directions</div>
      <div style={styles.main1}>
        <div style={styles.subDirections}>
          • You will have 5 seconds to analyze the following graph.
        </div>
        <div style={styles.subDirections}>
          • Your objective is to determine, in percentage, the different between
          the bars of the graph.
        </div>
      </div>
      <div style={styles.main}>
        <Button
          onClick={() => history.push("/tutorial")}
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
  main1: {
    display: "flex",
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
    fontSize: 20,
    paddingTop: 10,
  },
};
