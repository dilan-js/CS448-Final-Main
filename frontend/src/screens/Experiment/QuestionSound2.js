import React, { useState, useEffect } from "react";
import { Image, InputGroup, Button, FormControl } from "react-bootstrap";
import CustomNavbar from "../../components/CustomNavbar";
import { useHistory } from "react-router-dom";
import Graph from "../../assets/as3.png";

import {useAudioPlayer} from "react-use-audio-player";



export default function QuestionSound2({dispatchPageIndex}) {
  const [isBlack, setIsBlack] = useState(false);
  const [navigateAway, setNavigateAway] = useState(false);

  useEffect(() => {
    let timer = setTimeout(
      function () {
        setIsBlack(true);
      }.bind(this),
      5000
    );
    let timer2 = setTimeout(
      function () {
        setNavigateAway(true);
      }.bind(this),
      6000
    );
  }, []);

  const { stop, play } = useAudioPlayer({
    src: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
    format: "mp3",
    autoplay: true,
    onend: () => console.log("sound has ended!")
});




  useEffect(() => {
    if(isBlack){
      stop();
    }
    if(navigateAway){
      dispatchPageIndex({type: 'next'});
    }
  });

  return (
    <>
      {!isBlack ? (
        <>
          <CustomNavbar />
          <div style={styles.directions}>
            Question 1: What is bar B in terms of bar A?
          </div>
          <div style={styles.main}>
            <Image style={styles.img} src={Graph} />
            {/* <Button
          onClick={() => console.log("hey")}
          style={styles.button}
          variant="primary"
        >
          Continue
        </Button> */}
          </div>
        </>
      ) : (
        <div style={styles.parent}></div>
      )}
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
  img: {
    zIndex: 50,
    width: 500,
    height: 500,
  },
  hidden: {
    display: "none",
  },
};
