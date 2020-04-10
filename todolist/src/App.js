import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

// Component Import

import TaskForm from "./components/TaskFrom";
import Controls from "./components/Controls";
import TaskLists from "./components/TaskLists";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
  }
  OnGeneratorData = () => {
    let data = [
      {
        id: uuidv4(),
        name: "reactjs",
        status: true,
      },

      {
        id: uuidv4(),
        name: "angular",
        status: true,
      },
      {
        id: uuidv4(),
        name: "vue",
        status: false,
      },
      {
        id: uuidv4(),
        name: "nodejs",
        status: true,
      },
    ];

    localStorage.setItem("tasks", JSON.stringify(data));
  };

  componentWillMount(){
    // console.log(JSON.parse(localStorage.getItem('tasks')))
    if(localStorage && localStorage.getItem('tasks')){
      let TaskData = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: TaskData
      })
    }

    
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <TaskForm />
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5" />
              Thêm Công Việc
            </button>

            <button
              type="button"
              onClick={this.OnGeneratorData}
              className="btn btn-success"
            >
              Get Data
            </button>

            <Controls />
            <TaskLists TaskDaTa = {this.state.tasks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
