import React from 'react';
import ReactDOM from 'react-dom';
import FxPanel from './components/FxPanel';

require("../styles/global.css");
require("../styles/component-fx-panel.css");
require("../styles/component-fx-panel-heading.css");
require("../styles/component-col-heading.css");
require("../styles/component-fx-row.css");
require("../styles/component-fx-menu.css");
require("../styles/component-fx-flag-with-label.css");
require("../styles/max400.css");
require("../styles/min401.css");
require("../styles/min600.css");
require("../styles/min800.css");
// // require("./styles/min1000.css");

ReactDOM.render(<FxPanel className="fx-panel" baseCurrency="GBP"/>, document.getElementById('app') );