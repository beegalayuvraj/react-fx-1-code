import React from 'react';

class FxFlagWithLabel extends React.Component {
	constructor(props) {
		super();
		this.props = props;
	}
	render() {
		return	<div className="fx-flag-with-label">
					<img className={this.props.className} src={`./images/flags/${this.props.flag}.png`}/>
					<div className="fx-flag-label">{this.props.label}</div>
				</div>
	}
}

export default FxFlagWithLabel