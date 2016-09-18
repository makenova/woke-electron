import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const style = {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
    display: "block",
    fontSize: "40px",
    width: "160px",
    textAlign: "center"
}

class TimeInput extends Component {
    render(){
        return (
            <div className="time-input">
                <TextField
                    style={style}
                    value={this.props.elapsed}
                />
            </div>
        )
    }
}

export default TimeInput
