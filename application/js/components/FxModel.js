class FxModel{
	constructor() {
		this.state = {};
	}
	/*_getFxData() {
		const currencyArr = ["AUD", "CAD", "CHF", "EUR", "GBP", "HKD", "ILS", "NZD", "RUB", "SGD", "USD"];
		const currencyStr = currencyArr.toString();
		let xhr = new XMLHttpRequest();
		xhr.onload = this._reqListener.bind(this);
		var urlAndRequest = "https://openexchangerates.org/api/latest.json?app_id=bb1fc3dba8e74f16804d49c04b0b127a"
							+ "&base=" + this.baseCurrency
							+ "&symbols=" + currencyStr;
		xhr.open("get", urlAndRequest, true);
		xhr.send();
	}
	_reqListener(e) {
		console.log("_reqListener:this", e);
		this.fxData = JSON.parse(e.target.responseText);
		console.log("_reqListener:JSON:", this.fxData );
		var trigger = document.createEvent('Event');
		trigger.initEvent('fxmodel.fxloaded', true, true);
		document.dispatchEvent(trigger);
	}*/
	/*_setState(dataObj) {
		//remove empty fields from array
		console.log("_setState", dataObj );
		if( typeof(dataObj) === "array" ) {
			console.log("_setState received an array");
		}
		for( let str in dataObj ) {
			this.state[str] = dataObj[str];
		}
		//sort array alphabetically
		console.clear();
		console.log("break apart currency object");
		this.state.fxData.sort();
		let noOfCurrencies = this.state.fxData.length;
		let currencyPairData;
		for( let i = 0; i < noOfCurrencies; i++ ) {
			currencyPairData = this.state.fxData[i].split(",");
			let msTimeStamp = Number( currencyPairData[1] );
			let time = this._timeConverter( msTimeStamp );
			currencyPairData.push( time );
			this.state.fxData[i] = currencyPairData;
		}
		// console.log( "this.state.fxData", this.state.fxData );
	}*/
	/*_timeConverter( msTimeStamp ){
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
	}*/
}
export default FxModel