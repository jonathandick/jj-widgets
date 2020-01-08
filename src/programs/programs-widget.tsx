import React from "react";
import { match } from "react-router";
import { BrowserRouter, Route} from "react-router-dom";
import ProgramsBriefSummary from "./programs-brief-summary.component";
import ProgramsRoutes from "./programs-routes";


export const programsWidget = {
    root: ProgramsBriefSummary,
    routes: ProgramsRoutes
}