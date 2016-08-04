import dispatcher from '../dispatcher';

export function getFxData( fxObj ) {
	dispatcher.dispatch({
		type:"getFxData",
		baseCurrency:fxObj.baseCurrency,
	})
}