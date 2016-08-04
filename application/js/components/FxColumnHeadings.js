import React from 'react';
import FxColHeadingText from './FxColHeadingText';


class FxColumnHeadings extends React.Component {
	constructor(props) {
		super();
		this.props = props;
		this.fxColumnHeading = { backgroundColor:"#000" };
		this.state = { fxObj:this.props.fxObj };
	}
	render() {
		return 	(<div className="column-heading-background">
					<FxColHeadingText className="fx-col-head-title" label={ this.props.labels.fxLabel }/>
					<FxColHeadingText className="fx-col-head-data" label={ this.props.labels.bigBid } />
					<FxColHeadingText className="fx-col-head-data" label={ this.props.labels.bidPoints } />
					<FxColHeadingText className="fx-col-head-data" label={ this.props.labels.offerBigFigure } />
					<FxColHeadingText className="fx-col-head-data" label={ this.props.labels.offerPoints } />
					<FxColHeadingText className="fx-col-head-data xtra" label={ this.props.labels.offerPoints } />
					<FxColHeadingText className="fx-col-head-data xtra" label={ this.props.labels.offerPoints } />
					<FxColHeadingText className="fx-col-head-data xtra" label={ this.props.labels.offerPoints } />
				</div>)
	}
}

export default FxColumnHeadings


