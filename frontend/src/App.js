import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Landing from "./screens/Landing";
import SignUp from "./screens/SignUp";
import VisualImpairment from "./screens/VisualImpairment";
import VisualExplanation from "./screens/VisualExplanation";
import HearingImpairment from "./screens/HearingImpairment";
import HearingExplanation from "./screens/HearingExplanation";
import DirectionsOne from "./screens/DirectionsOne";
import DirectionsTwo from "./screens/DirectionsTwo";
import Quiz from "./screens/Quiz";


//browser router is the issue.

// Store the data here in this component

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/visual" component={VisualImpairment} />
        <Route exact path="/visualex" component={VisualExplanation} />
        <Route exact path="/hearing" component={HearingImpairment} />
        <Route exact path="/hearingex" component={HearingExplanation} />
        <Route exact path="/directions1" component={DirectionsOne} />
        <Route exact path="/directions2" component={DirectionsTwo} />
        <Route exact path="/page9" component={Quiz} />
       
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