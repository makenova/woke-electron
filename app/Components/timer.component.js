import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import {cyan700, pinkA200} from 'material-ui/styles/colors';

class Timer extends React.Component {
    render(){
        const style = {
            marginLeft: "auto",
            marginRight: "auto",
            display: "block"
        }
        return (
        <div className="timer">
           <LinearProgress
            mode="determinate"
            value={this.props.value}
            color={pinkA200}
            style={style}
          />
        </div>
        )

    }
}

export default Timer
