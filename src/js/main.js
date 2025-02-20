import { BaseHelpers } from "./helpers/base-helpers";
import { EditableSvg } from "./helpers/utilities";

import { BarChart } from "./templates/dashboard";

BaseHelpers.checkWebpSupport();

BaseHelpers.calcScrollbarWidth();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

// editable svg
Array.from(document.querySelectorAll(".editable-svg")).map((img) => EditableSvg(img));

// templates
BarChart();
