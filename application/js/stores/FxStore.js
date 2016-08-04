import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class FxStore extends EventEmitter {
	constructor() {
		super();
		console.log("FxStore:constructed");
	}

	_handleActions(fxAction) {
		console.log( "handleActions:", fxAction );
		switch(fxAction.type) {
			case "getFxData":
				this._getFxData(fxAction.baseCurrency);
				break;
			default:
				console.log("FxStore - handleActions - switch default");
		}
	}

	_dataService() {
		var scope = this;
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
			scope.emit("fxDataReceived", { "fxData":fxData, "initLoad":true } );
		});
		socket.connect('http://localhost:3000');
	}

	_getFxData(baseCurrency) {
		this._dataService();
		let xhr = new XMLHttpRequest();
		xhr.open("get", 'http://localhost:3000/fx/'+baseCurrency, true);
		xhr.send();
	}
}

const fxStore = new FxStore;
dispatcher.register( fxStore._handleActions.bind(fxStore) );

export default fxStore;