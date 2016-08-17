import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class SaveButton extends React.Component {
    render(){
        const style = {
            margin: "auto"
        };
        return (
        <div className="save-button">
            <RaisedButton label="Save" primary={true} style={style} />
        </div>
        )

    }
}

export default SaveButton