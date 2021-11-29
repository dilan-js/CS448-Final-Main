import React from "react";

import CustomNavbar from "../components/CustomNavbar";
import { Button, Badge } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Page1() {
  const history = useHistory();

  return (
    <>
      <div style={styles.main}>
        <div style={styles.title}>Welcome to Animys</div>
      </div>
      <Button
        onClick={() => history.push("/register")}
        style={styles.button}
        variant="primary"
      >
        Enter
      </Button>
      <div style={styles.footer}>
        <div style={styles.footer1}>By Dana Chieuh & Dilan Nana</div>
        <div style={styles.footer2}>Made with ❤ at Stanford University</div>
      </div>
    </>
  );
}

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 200,
  },
  title: {
    fontSize: 45,
    fontWeight: 700,
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
  footer: {
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
};
