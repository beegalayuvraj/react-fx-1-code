import React from 'react';
import FxRowText from './FxRowText';

class FxFlag extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		//console.log("this.props.className", this.props.className)
	}
	render() {
		return	<img className={this.props.className} src={`./images/flags/${this.props.flag}.png`}/>
	}
}

export default FxFlag