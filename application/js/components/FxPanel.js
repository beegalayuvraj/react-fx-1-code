import React from 'react';
import FxPanelHeading from './FxPanelHeading';
import FxColumnHeadings from './FxColumnHeadings';
import FxRow from './FxRow';
import FxModel from './FxModel';
import FxMenu from './FxMenu';
import FxVerticalSpace from './FxVerticalSpace';
import FxStore from '../stores/FxStore';
import * as FxAction from '../actions/FxAction';

class FxPanel extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.index = 0;
		this.state = { baseCurrency:this.props.baseCurrency, initLoad:false, rowSpacer:"15px" };
		this.currencyPairArr = [];
		this._updateState = this._updateState.bind(this);
		this.fxModel = new FxModel();
	}
	_timeConverter( msTimeStamp ){
		let dateObj = new Date( msTimeStamp );
		let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		let year = dateObj.getFullYear();
		let month = months[dateObj.getMonth()];
		let date = dateObj.getDate();
		let hour = dateObj.getHours();
		let min = dateObj.getMinutes();
		let sec = dateObj.getSeconds();
		let timeObj = { "date":date, "month":month, "year":year, "hour":hour, "min":min, "sec":sec };
		return timeObj;
	}
	_updateState(fxObj) {
		this.setState({ "fxData":fxObj.fxData, "initLoad":true });
	}
	componentWillMount() {
		console.log("FxPanel componentWillMount");
		FxStore.on("fxDataReceived", this._updateState );
	}
	componentWillUnmount() {
		console.log("FxPanel componentWillUnMount");
		FxStore.removeListener("fxDataReceived", this._updateState );
	}
	componentDidMount() {
		console.log("FxPanel componentDidMount");
		FxAction.getFxData( { baseCurrency:this.state.baseCurrency } );
	}

	_removeTrailingZerosAndPeriod(theStringOfTheNumber) {
		return String( parseFloat(theStringOfTheNumber) );
	}

	_formatStr( value ) {
		var theNum = this._removeTrailingZerosAndPeriod( value );
		return theNum;
	}

	_getFxRowArray() {
		var scope = this;
		var fxRows = scope.state.fxData.fxArr.map( function(fxArr, index) {
			let fxObj = {	baseCurrency: 	{ value:scope.state.baseCurrency, label:"Base Currency" },
							currency: 		{ value:fxArr[0].substr(4,3), label:"Traded" },
							fxPair: 		{ value:scope.state.baseCurrency + "-" + fxArr[0].substr(4,3), label:"FX pair" },
							fxLabel:		{ value:fxArr[0], label:"TRADE" },
							timeStamp: 		{ value:fxArr[1], label:"Time" },
							bigBid: 		{ value:scope._formatStr( fxArr[2] ), label:"BIG BID" },
							bidPoints: 		{ value:scope._formatStr( fxArr[3] ), label:"BID POINTS" },
							offerBigFigure:	{ value:scope._formatStr( fxArr[4] ), label:"OFFER BIG" },
							offerPoints: 	{ value:scope._formatStr( fxArr[5] ), label:"OFFER POINTS" },
							high: 			{ value:scope._formatStr( fxArr[6] ), label:"High" },
							low: 			{ value:scope._formatStr( fxArr[7] ), label:"Low" },
							open: 			{ value:scope._formatStr( fxArr[8] ), label:"Open" } };
			return { "fxObj":fxObj, "key":index }
		});
		return fxRows;
	}

	render() {
		//if data is not loaded then return an empty FxPanel
		if( this.state.initLoad === false) {
			console.log("FxPanel false");
			return <div className="fx-panel"></div>;
		}
		const scope = this;
		let rows = this._getFxRowArray();
		let path = rows[0].fxObj;
		let fxLabel = path.fxLabel.label;
		let bigBid = path.bigBid.label;
		let bidPoints = path.bidPoints.label;
		let offerBigFigure = path.offerBigFigure.label;
		let offerPoints = path.offerPoints.label;
		return	<div className="fx-panel">
					<FxPanelHeading fxPanel={this} fxModel=""/>
					<FxColumnHeadings labels={{fxLabel:fxLabel, bigBid:bigBid, bidPoints:bidPoints, offerBigFigure:offerBigFigure, offerPoints:offerPoints }}/>
					<FxVerticalSpace height={this.state.rowSpacer}/>
					{rows.map( function(fx, index) {
						return <FxRow fxObj={fx.fxObj} key={index}/>
					} )}
				</div>
					
	}
}

export default FxPanel
