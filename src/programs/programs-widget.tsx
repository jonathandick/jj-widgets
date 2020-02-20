import React from "react";
import ProgramsBriefSummary from "./programs-brief-summary.component";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {backendDependencies} from "openmrs-esm-patient-chart-widgets";


export function ProgramsWidget(props) {
    console.log(backendDependencies);
    return (
        <BrowserRouter basename={window["getOpenmrsSpaBase"]()}>
            <ProgramsBriefSummary/>
            
            <Link to="hello/world">Hello</Link>
            <Route exact path="/patient/:patientUuid/chart/hello/world">
                <div>Hello world!</div> 
            </Route>
        </BrowserRouter>
    )
}
 