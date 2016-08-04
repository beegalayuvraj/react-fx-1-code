import React from 'react';

class FxRowText extends React.Component {
	constructor(props) {
		super();
		this.props = props;
	}
	_toggleHover() {
		this.setState({ hover:!this.state.hover });
	}
	render() {
		let str = this.props.label.replace(/ /, '\n' );
		this.colHeading = {
			width:"30px",
			height:"25px",
			border:"1px solid green"
		}
		return <div className={this.props.className}><p>{str}</p></div>
	}
}

export default FxRowText;