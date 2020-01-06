import "./set-public-path";

import { programsWidget } from "./programs/programs-widget";
import ProgramsWidget from "./programs/programs-widget";
import ProgramsBriefSummary from "./programs/programs-brief-summary.component";

export function getWidgets() {
  return [programsWidget];
}

export const widgets = [programsWidget];

