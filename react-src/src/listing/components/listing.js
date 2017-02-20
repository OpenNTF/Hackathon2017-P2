import React from 'react';

/*
	Custom Components Import
*/
class Listing extends React.Component {
	constructor(){
		super();
		this.state = {
			data:[]
		};
    this.onClick = this.onClick.bind(this);
	}

	onClick(){
		this.props.openNote();
	}

	render() {
  	return (
	  <div>
      <h2>I am a Listing</h2>
			<button
				type="button"
				className="btn btn-warning"
				onClick={e => {
						 e.preventDefault()
						 this.onClick()
				 }}
			>Open Form</button>
	  </div>
  	);
	}
}

export default Listing;
