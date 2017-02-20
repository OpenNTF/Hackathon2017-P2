import React, { Component } from 'react';

class App extends Component {
  constructor(){
		super();
		this.state = {
			taskList:[],
      task:""
		};

		this.onChange = this.onChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
	}

  onChange(key, e){
		switch(key){
			case "inputTask":
        this.setState({task:e.target.value});
				break;
      default:
        return true;
		}
	}

  onSubmitClick(){
    if(this.state.task === ""){
      return false;
    }

    var taskList = this.state.taskList;

    var task = {
      id:(taskList.length + 1),
      task:this.state.task
    }

    taskList.push(task);
    this.setState({taskList:taskList, task:""});
	}

  render() {
    return (
      <div className="container">
        <div style={{marginTop:50}}>
          <div className="panel panel-info" >
            <div className="panel-heading"><div className="panel-title">Task Form</div></div>
            <div style={{paddingTop:30}} className="panel-body" >
              <form
                className="form-horizontal"
                role="form"
                onSubmit={e => {
                    e.preventDefault()
        						this.onSubmitClick()
                }}
                >
                <div style={{marginBottom:25}} className="input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-subtitles"></i></span>
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="Add task and hit Enter or click Submit"
                    value={this.state.task}
                    onChange={(e) => {
    									this.onChange("inputTask", e)
    								}}
                    ></input>
                </div>
                <div style={{marginTop:10}} className="form-group">
                  <div className="col-sm-12 controls">
                    <a
                      className="btn btn-primary"
                      onClick={e => {
                          e.preventDefault()
              						this.onSubmitClick()
                      }}
                      >Submit</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="panel panel-success" >
            <div className="panel-heading"><div className="panel-title">Task List</div></div>
            <div style={{paddingTop:30}} className="panel-body" >
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Task</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.taskList.map(entry =>
                    <tr key={entry.id}>
                      <th scope="row">{entry.id}</th>
                      <td>{entry.task}</td>
                    </tr>
      				    )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
