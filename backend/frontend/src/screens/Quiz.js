import React, {useReducer, useEffect, useState} from 'react'

import Question from './Experiment/Question';
import Answer from './Experiment/Answer';

const steps = {Question, Answer};
const reducer = (state, action) => {
    switch(action.type){
        case 'next': 
            console.log({state});
            return state+1;
        case 'return':
            return action.step;
        default: 
            return state;
    }
}

export default function Quiz({questions}) {
    const [questionIndex, dispatchQuestionIndex] = useReducer(reducer, 0);
    const [currentStep, setCurrentStep] = useState("Question");
    const question = questions[questionIndex];
    const Page = steps[currentStep];

    useEffect(() => {
        let mostRecentQuestion = localStorage.getItem("mostRecentQuestion");
        if(mostRecentQuestion){
            dispatchQuestionIndex({type: 'return', step: parseInt(mostRecentQuestion)});
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("mostRecentQuestion",questionIndex);
    }, [questionIndex]);

    return <Page setCurrentStep={setCurrentStep} questionIndex={questionIndex} question={question} dispatchQuestionIndex={dispatchQuestionIndex}/>
}
