import React from 'react';

class FxMenuButton extends React.Component {
	constructor(props) {
		super();
		this.props = props;
	}
	render() {
		return 	(<div className={this.props.className}>
					<img className='fx-menu-button-img' src={`./images/flags/${this.props.flag}.png`}/>
				</div>)
	}
}

export default FxMenuButton