import React from 'react';

class FxRowVerticalSpace extends React.Component {
	constructor(props) {
		super();
		this.props = props;
	}
	
	render() {
		return 	(<div style={{height:this.props.height}}></div>)
	}
}

export default FxRowVerticalSpace