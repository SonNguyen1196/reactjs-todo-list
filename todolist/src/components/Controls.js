import React, {Component} from 'react';
import Search  from './controls/Search';
import Order  from './controls/Order';

class Control extends Component {
    render() {
        return(
            <div className="row mt-15">
            <Search/>
            <Order/>
          </div>
        )
    }
}

export default Control