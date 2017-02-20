import React from 'react';

/*
	Custom Components Import
*/
import ListingContainer from '../../listing/containers/listing-container';
import FormContainer from '../../form/containers/form-container';

class App extends React.Component {
	render() {
  	return (
	  <div>
      { this.props.app === 'main' ? <ListingContainer /> : null }
			{ this.props.app === 'form' ? <FormContainer /> : null }
	  </div>
  	);
	}
}

export default App;
