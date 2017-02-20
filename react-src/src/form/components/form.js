import React from 'react';

/*
	Custom Components Import
*/
class Form extends React.Component {
	constructor(){
		super();
		this.state = {
			data:{}
		};

    this.onClick = this.onClick.bind(this);
	}

	onClick(){
		this.props.closeNote();
	}

	render() {
  	return (
	  <div>
      <h2>I am a Form</h2>
			<button
				type="button"
				className="btn btn-warning"
				onClick={e => {
						 e.preventDefault()
						 this.onClick()
				 }}
			>Close Form</button>
	  </div>
  	);
	}
}

export default Form;
