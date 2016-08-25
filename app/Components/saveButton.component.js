import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class SaveButton extends React.Component {
    render(){
        const style = {
            margin: "auto",
            display: "block",
            width: "20%",
        };
        
        return (
        <div className="save-button">
            <RaisedButton label="Save" secondary={true} style={style}/>
        </div>
        )

    }
}

export default SaveButton