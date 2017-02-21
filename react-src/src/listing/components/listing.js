import React from 'react';

/*
	Custom Components Import
*/
import Card from './card';

class Listing extends React.Component {
	constructor(){
		super();

    this.onClick = this.onClick.bind(this);
	}

	onClick(){
		//this.props.openNote();
	}

	render() {
  	return (
			<div className="container">
					<nav className="navbar navbar-default">
							<div className="container-fluid">
									<div className="navbar-right">
										<ul className="nav navbar-nav navbar-right">
												<form className="navbar-form navbar-left">
														<div className="input-group">
																<input type="text" className="form-control" placeholder="Search for..." />
																<span className="input-group-btn">
																		<button className="btn btn-default" type="button">Go!</button>
																</span>
														</div>
												</form>
										</ul>
									</div>
							</div>
					</nav>
					<div className="content">
							<div className="row flex-row">
								{this.props.data.map(entry =>
									<Card key={entry.id} data={entry} />
								)}
							</div>
					</div>
			</div>
  	);
	}
}

export default Listing;
