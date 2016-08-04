import React from 'react';

class FxMenuSelect extends React.Component {
	constructor(props) {
		super();
		this.props = props;
	}
	sendMenuEvent(e) {
		console.log("send onMouseDown event", e.target );
	}

	render() {
		return 	(<div className="hamburger-menu" onMouseDown={this.sendMenuEvent}>
					<img src='./images/hamburger.png'/>
				</div>)
	}
}

export default FxMenuSelect