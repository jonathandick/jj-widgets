import React from "react";
import { match } from "react-router";
import { BrowserRouter, Route} from "react-router-dom";
import ProgramsBriefSummary from "./programs-brief-summary.component";
import ProgramsDetailedSummary from "./programs-detailed-summary.component";


export const programsWidget = {
    root: ProgramsBriefSummary,
    routes: <BrowserRouter><Route exact path="/patient/:patientUuid/chart/programs" component={ProgramsDetailedSummary}/></BrowserRouter>,
    routeParams: [
        {
            path : "/patient/:patientUuid/chart/programs",
            component : ProgramsDetailedSummary
        }
    ]
}

function Routes(props) {
    return (
        <>
            <Route exact path="/patient/:patientUuid/chart/programs" component={ProgramsDetailedSummary}/> 
        </>
    )
}



export default function ProgramsWidget(props) {

    return(
        <>
        <ProgramsBriefSummary/>
        <BrowserRouter basename={window["getOpenmrsSpaBase"]()}>
            <Route exact path="/patient/:patientUuid/chart/programs" component={ProgramsDetailedSummary}/>
        </BrowserRouter>
        </>
    )
}
