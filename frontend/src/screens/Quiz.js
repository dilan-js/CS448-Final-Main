import React, {useReducer, useEffect} from 'react'

import Question1 from './Experiment/Question1';
import QuestionSound2 from './Experiment/QuestionSound2';
import Answer3 from './Experiment/AnswerQuestion3';

const steps = [Question1, QuestionSound2, Answer3];
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

export default function Quiz() {
    const [pageIndex, dispatchPageIndex] = useReducer(reducer, 0);
    const Page = steps[pageIndex];
    useEffect(() => {
        let mostRecentStep = localStorage.getItem("mostRecentStep");
        if(mostRecentStep){
            dispatchPageIndex({type: 'return', step: parseInt(mostRecentStep)});
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("mostRecentStep",pageIndex);
    }, [pageIndex]);

    return <Page dispatchPageIndex={dispatchPageIndex}/>
}
