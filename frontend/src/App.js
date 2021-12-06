import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import React, {useState} from 'react';
import Landing from "./screens/Landing";
import Ending from "./screens/Ending";
import SignUp from "./screens/SignUp";
import VisualImpairment from "./screens/VisualImpairment";
import VisualExplanation from "./screens/VisualExplanation";
import HearingImpairment from "./screens/HearingImpairment";
import HearingExplanation from "./screens/HearingExplanation";
import DirectionsOne from "./screens/Tutorial/DirectionsOne";
import DirectionsTwo from "./screens/Tutorial/DirectionsTwo";
import Quiz from "./screens/Quiz";
import Tutorial from "./screens/Tutorial";
import Begin from "./screens/Experiment/BeginPage";


//browser router is the issue.

// Store the data here in this component

function App() {
  const [questions, setQuestions] = useState([]);

  console.log({questions});
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/the-end" component={Ending} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/visual" component={VisualImpairment} />
        <Route exact path="/visualex" component={VisualExplanation} />
        <Route exact path="/hearing" component={HearingImpairment} />
        <Route exact path="/hearingex" component={HearingExplanation} />
        <Route exact path="/directions1" component={DirectionsOne} />
        <Route exact path="/directions2" component={DirectionsTwo} />
        <Route exact path="/tutorial" component={Tutorial} />
        <Route exact path="/test" render={(props) => (
    <Quiz {...props} questions={questions} />
  )} />
        <Route exact path="/begin" render={(props) => (
    <Begin {...props} questions={questions} setQuestions={setQuestions} />
  )} />
       
      </div>
    </BrowserRouter>
  );
}

export default App;


/*
 <Route exact path="/page10" component={Page10} />
        <Route exact path="/page11" component={Page11} />
        <Route exact path="/page12" component={Page12} />
        <Route exact path="/page13" component={Page13} />
        <Route exact path="/page14" component={Page14} />
        */