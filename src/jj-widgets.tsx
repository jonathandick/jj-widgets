import "./set-public-path";

import React from "react";
import ReactDOM from "react-dom";
import ProgramsWidget from "./programs/programs-widget";
import ProgramsBriefSummary from "./programs/programs-brief-summary.component";

export function getWidgets() {
  return [ProgramsWidget];
}

export {ProgramsBriefSummary}