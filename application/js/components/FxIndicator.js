import React from 'react';

class FxIndicator extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.fxIndicatorStyle = {
			display:'inline-block',
			position:'relative',
			top:'-1px',
			marginLeft:'9px',
			width:'12px',
			height:'12px',
			borderRadius:'4px',
			backgroundColor:'rgba(0,255,0,1)',
			color:'#0F0'
		}
	}
	render() {
		return 	(<div style={this.fxIndicatorStyle}></div>)
	}
}

export default FxIndicator