import React from 'react';

class FxColHeadingText extends React.Component {
	constructor(props) {
		super();
		this.props = props;
	}
	_toggleHover() {
		this.setState({ hover:!this.state.hover });
	}
	render() {
		let text = this.props.label.split(/ /).map((text, index) => {
		   return <p key={ index }>{ text }</p>
		});

		this.colHeading = {
			/*width:"30px",
			height:"25px",*/
			border:"1px solid green",
			textAlign:"center"
		}
		return <div className={this.props.className}>{text}</div>
	}
}

export default FxColHeadingText;