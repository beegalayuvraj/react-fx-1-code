import React from 'react';
import FxFlag from './FxFlag';
import FxMenuSelect from './FxMenuSelect';

class FxPanelHeading extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		//console.log( "FxPanelHeading:fxPanel", this.props.fxPanel );
	}
	render() {
		//
		var dateStr = this.props.fxPanel._timeConverter( new Date().getTime() );
		return 	(<div className='fx-panel-heading'>
					<FxMenuSelect/>
					<FxFlag className="fx-panel-heading-flag" flag={this.props.fxPanel.state.baseCurrency}/>
					<span className="panel-heading-title">{this.props.fxPanel.state.baseCurrency}</span>			
					<span className="fx-panel-heading-update">UPDATED:<br/>{dateStr.date + " " + dateStr.month + " " + dateStr.year + " " + + dateStr.hour + ":" + dateStr.min}</span>
				</div>)
	}
}

export default FxPanelHeading