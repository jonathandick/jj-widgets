import React from "react";
import { match, Route } from "react-router";
import ProgramsDetailedSummary from "./programs-detailed-summary.component";

export default function ProgramsRoutes(props: ProgramsRoutesProps) {
    return (
        <>
            <Route exact path="/patient/:patientUuid/chart/programs" component={ProgramsDetailedSummary} />
        </>
    );
  }
  
  type ProgramsRoutesProps = {
    match: match;
  };