import React from "react";
import { match, Route } from "react-router";
import ProgramsBriefSummary from "./programs-brief-summary.component";
import ProgramsDetailedSummary from "./programs-detailed-summary.component";
import ProgramsRoutes from "./programs-routes";


export default function getProgramsWidget() {
    return {
        "components": [ProgramsBriefSummary,ProgramsDetailedSummary],
        "routes":[ProgramsRoutes]
    }
}