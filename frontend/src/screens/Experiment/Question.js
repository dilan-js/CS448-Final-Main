import React, { useState, useEffect, useMemo } from "react";
import { Image, InputGroup, Button, FormControl } from "react-bootstrap";
import CustomNavbar from "../../components/CustomNavbar";
import Graph from "../../assets/as3.png";
import {useAudioPlayer} from "react-use-audio-player";
import { v4 as uuidv4 } from 'uuid';

import music from './instrumental_lauryn.mp3';
export default function Question({setCurrentStep, question, questionIndex }) {
  const {questionTitle = "", graphURL="", soundURL = ""} = question || {};
  const [isBlack, setIsBlack] = useState(false);
  const [displayQuestion, setDisplayQuestion] = useState(false);
  const [navigateAway, setNavigateAway] = useState(false);
//  const soundURL = useMemo(() => soundURLs[`soundURL${soundIndex}`] ? soundURLs[`soundURL${soundIndex}`] + '?' + uuidv4() : "", [soundIndex]);
 // console.log({soundURL});
  const { stop, play, ready} = useAudioPlayer({
    src: soundURL,
    format: "wav",
    autoplay: Boolean(soundURL),
    onend: () => console.log("soundURL: ", soundURL)
});


  useEffect(() => {
    let timer;
    let timer2;
    if(ready){
      setDisplayQuestion(true);
      timer = setTimeout(
        function () {
          setIsBlack(true);
        }.bind(this),
        5000
      );
      timer2 = setTimeout(
        function () {
          setNavigateAway(true);
        }.bind(this),
        6000
      );
    }
    return () => {
      // clearTimeout(timer);
      // clearTimeout(timer2);
    }
  }, [ready]);


  useEffect(() => {
    if(isBlack){
      stop();
    }
    if(navigateAway){
      setCurrentStep("Answer");

    }
  });

  if(!displayQuestion){
    return <div></div>
  }

  return (
    <>
      {!isBlack ? (
        <>
          <CustomNavbar />
          <div style={styles.directions}>
            Question {questionIndex+1}: How many times taller is the taller bar compared to the shorter one?
          </div>
          <div style={styles.main}>
            <Image style={styles.img} src={graphURL} />
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
    alignItems: "center"
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
