import React from 'react';
import FxFlagWithLabel from './FxFlagWithLabel';
import FxRowText from './FxRowText';
import FxIndicator from './FxIndicator';

class FxRow extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.state = { fxObj:this.props.fxObj };
		this.fxRowStyle = {}
		this.fxPairTx = {	width:'60px',
							marginLeft:'3px',
							display:'inline-block',
							color:'#777'
						 };
	}
	componentWillReceiveProps(value) {
		this.setState({fxObj:value.fxObj})
	}
	
	render() {
		return 	(<div className='fx-row' style={this.fxRowStyle}>
					<FxFlagWithLabel className="flag-style" flag={this.state.fxObj.currency.value.toLowerCase()} label={ this.state.fxObj.fxPair.value }/>
					<FxRowText className="fx-row-text fx-data" label={ this.state.fxObj.bigBid.value } fxStyle={{}}/>
					<FxRowText className="fx-row-text fx-data" label={ this.state.fxObj.bidPoints.value } fxStyle={{}}/>
					<FxRowText className="fx-row-text fx-data" label={ this.state.fxObj.offerBigFigure.value } fxStyle={{}}/>
					<FxRowText className="fx-row-text fx-data" label={ this.state.fxObj.offerPoints.value } fxStyle={{}}/>
					<FxRowText className="fx-row-text fx-data xtra" label={ this.state.fxObj.high.value } fxStyle={{}}/>
					<FxRowText className="fx-row-text fx-data xtra" label={ this.state.fxObj.low.value } fxStyle={{}}/>
					<FxRowText className="fx-row-text fx-data xtra" label={ this.state.fxObj.open.value } fxStyle={{}}/>
				</div>)
	}
}

export default FxRow