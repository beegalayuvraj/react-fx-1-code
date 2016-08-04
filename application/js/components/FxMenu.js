import React from 'react';
import FxMenuButton from './FxMenuButton';

class FxMenu extends React.Component {
	constructor(props) {
		super();
		this.props = props;
	}
	render() {
		return 	(<div className='fx-menu-container'>
					<FxMenuButton flag="GBP"/>
					<FxMenuButton flag="EUR"/>
					<FxMenuButton flag="USD"/>
					<FxMenuButton flag="JPY"/>
					<FxMenuButton flag="CHF"/>
					<FxMenuButton flag="CHF"/>
					<FxMenuButton flag="CHF"/>
					<FxMenuButton flag="CHF"/>
				</div>)
	}
}

export default FxMenu