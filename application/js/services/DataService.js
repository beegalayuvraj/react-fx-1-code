class DataService {
	constructor() {
		console.log('class DataService');
	}
	initService(fxModel) {
		//create an XMLHttpRequest object that will make a GET route request to the server
		let xhr = new XMLHttpRequest();
		//create a socket client that will listen for events to be pushed from the server
		let socket = io({ 'reconnection': false });
			//set up event handlers for socket connection
			socket.on('connect', function () {
				console.log("socket connect");
			});
			socket.on('disconnect', function () {
				console.log("socket disconnect");
			});
			socket.on('close', function () {
				console.log("socket close");
			});
			socket.on("data", function(fxData) {
				fxModel._setState( { "fxData":fxData, "fxLoaded":true } );
			});
		socket.connect('http://localhost:3000');
		
		//make GET request
		xhr.open("get", 'http://localhost:3000/fx', true);
		xhr.send();
	}
	/* for future use */
	/*	_getFxFromXhr() {
			this.currencyArr = ["AUD", "CAD", "CHF", "EUR", "GBP", "HKD", "ILS", "NZD", "RUB", "SGD", "USD"];
			
			const currencyStr = this.currencyArr.toString();
			this.currencyArr = this._getCurrencyPairs();
			let xhr = new XMLHttpRequest();
			xhr.onload = this._reqListener.bind(this);
			var urlAndRequest = "https://openexchangerates.org/api/latest.json?app_id=bb1fc3dba8e74f16804d49c04b0b127a"
								+ "&base=" + this.state.baseCurrency
								+ "&symbols=" + currencyStr;
			var urlAndRequest = "http://webrates.truefx.com/rates/connect.html?"
								+ "u=fx67&p=FR33FLY"
								+ "&q=davefx&c=" + this.currencyPairArr
								+ "&f=csv&s=n"
			xhr.open("get", urlAndRequest, true);
			xhr.send();
		}*/
	/* for future use */
	/*_reqListener(e) {
		console.log('_reqListener', e);
		let jsonFx = JSON.parse(e.target.responseText);
		if(e.target.status === 200){
			this.setState({ fx:jsonFx, fxLoaded:true });
		} else {
			this.setState({ fx:jsonFx, fxLoaded:false });
		}
	}
	_getCurrencyPairs(currencyArr) {
		console.log('_getCurrencyPairs', this.currencyArr);
		var scope = this;
		this.currencyArr.map( function(v, i) {
			scope.currencyPairArr.push( v + "/" + scope.state.baseCurrency );
		})
		console.log('currencyPairArr', this.currencyPairArr)
	}*/
}

export default DataService;