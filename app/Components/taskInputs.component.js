import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class TaskInputs extends React.Component {

    render(){
        const style = {
            margin: "10px"
        };
        
        const divStyle = {
            margin: "auto",
            display: "block"
        }

        return (
        <div className="task-inputs">
   
        <TextField style={style}
            floatingLabelText = "Task"
           /> 
           <TextField style={style}
            floatingLabelText = "Category"
           />

        </div>
        )

    }
}

export default TaskInputs