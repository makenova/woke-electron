import React from 'react';
import TextField from 'material-ui/TextField';

class TimeInput extends React.Component {
    render(){
        const style = {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
            display: "block",
            fontSize: "40px",
            width: "160px",
            textAlign: "center"
        }
        return (
        <div className="time-input">
            <TextField
                style={style}
                defaultValue="00:45:00"
            />
        </div>
        )

    }
}

export default TimeInput