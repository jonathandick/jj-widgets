import React from "react";
import { match, } from "react-router";
import { BrowserRouter, Route} from "react-router-dom";
import ProgramsDetailedSummary from "./programs-detailed-summary.component";


export default function ProgramsRoutes(props) {

  return (
    <>
      <Route exact path="/patient/:patientUuid/chart/programs" component={ProgramsDetailedSummary}/>,
    </>
  );

}





type ProgramsRoutesProps = {
  match: match;
};
