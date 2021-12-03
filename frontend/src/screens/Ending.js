import React, {useEffect} from "react";

import CustomNavbar from "../components/CustomNavbar";
import { Button, Badge } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Page1() {
  const history = useHistory();

  useEffect(() => {
    localStorage.clear();
  }, [])

  return (
    <>
      <div style={styles.main}>
        <div style={styles.title}>Thank You!</div>
      </div>
      <Button
        onClick={() => history.push('/')}
        style={styles.button}
        variant="primary"
      >
        Exit
      </Button>
      <div style={styles.footer}>
        <div style={styles.footer1}>By Dana Cheuh & Dilan Nana</div>
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
    flexDirection: 'column',
    textAlign: 'center'
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
  subtitle:{
      fontSize: 25, 
      fontWeight: 500, 
      width: '60%'
  }
};
