import React, {Component} from "react";
import "./App.css";

// Component Import 

import TaskForm from './components/TaskFrom'
import Controls from './components/Controls'
import TaskLists from './components/TaskLists'

class App extends Component {
  render(){
    return(
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
          <Controls />
          <TaskLists/>
        </div>
      </div>
    </div>
    )
  }
}

export default App;
