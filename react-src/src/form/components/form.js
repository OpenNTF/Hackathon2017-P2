import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import globals from '../../globals';
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
		this.onAttachmentUploaded = this.onAttachmentUploaded.bind(this);
	}

	onAttachmentUploaded(file, res){

	}

	onClick(){
		this.props.closeNote();
	}

	render() {
		var djsConfig = {
			addRemoveLinks: true,
//			acceptedFiles: ".xls,.xlsx",
			maxFilesize:10,//10MB
			maxFiles:1,
//			headers:{"Authorization": localStorage.getItem('token')},
			dictDefaultMessage:"Click here or drop file to upload"
		};

		var config = {
			postUrl: globals.dropzoneUrl
		};

		var eventHandlers = {
			success: this.onAttachmentUploaded
		}

  	return (
	  <div>
      <h2>I am a Form</h2>
			<DropzoneComponent
				config={config}
				eventHandlers={eventHandlers}
				djsConfig={djsConfig}
			/>			
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
