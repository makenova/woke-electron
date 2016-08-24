import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class SaveButton extends React.Component {
    render(){
        const style = {
            margin: "auto",
            display: "block",
            width: "20%"
        };
        
        return (
        <div className="save-button">
            <RaisedButton label="Save" primary={true} style={style} backgroundColor="#f3f3f3"/>
        </div>
        )

    }
}

export default SaveButton