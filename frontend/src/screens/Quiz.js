import React, {useReducer, useEffect} from 'react'

import Page9 from './Page9';
import Page10 from "./Page10";
import Page11 from "./Page11";
import Page12 from "./Page12";
import Page13 from "./Page13";
import Page14 from "./Page14";

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
