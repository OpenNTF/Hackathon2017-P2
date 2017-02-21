import React from 'react';

/*
	Custom Components Import
*/
class Card extends React.Component {
	constructor(){
		super();
		this.state = {
			data:{}
		};
    this.onClick = this.onClick.bind(this);
    //note-default
	}

	onClick(){
		// this.props.openNote();
	}

	render() {
  	return (
			<div className="col-xs-6 col-sm-4 col-md-3 flex-col">
          <div className={`note ${this.props.data.value.sentiment}`}>
              <div className="content-type"></div>
              <div className="note-content">
                <h3 className="lead">
                    {this.props.data.value.title}
                </h3>
                  <p>
                    {this.props.data.value.content}
                  </p>
                  <ul className="note-tags">
      								{this.props.data.value.tags.map(entry =>
      									<li>{entry}</li>
      								)}
                  </ul>
              </div>
          </div>
      </div>
  	);
	}
}

export default Card;
