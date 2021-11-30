import React, {useReducer, useEffect} from 'react'

import Page9 from './Tutorial/Page9';
import Page10 from "./Tutorial/Page10";
import Page11 from "./Tutorial/Page11";
import Page12 from "./Tutorial/Page12";
import Page13 from "./Tutorial/Page13";
import Page14 from "./Tutorial/Page14";

const steps = [Page9, Page10, Page11, Page12, Page13, Page14];
const reducer = (state, action) => {
    switch(action.type){
        case 'next': 
            return state+1;
        case 'return':
            return action.step;
        default: 
            return state;
    }
}

export default function Tutorial() {
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
