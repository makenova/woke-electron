import React from 'react';

import Title            from '../components/title.component'
import Timer            from '../components/timer.component'
import TimeInput        from '../components/timeInput.component'
import TimeControls      from '../components/timeControls.component'
import TaskInputs       from '../components/taskInputs.component'
import SaveButton       from '../components/saveButton.component'

class AppContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Title />
                <Timer />
                <TimeInput />
                <TimeControls />
                <TaskInputs />
                <SaveButton />
            </div>
        );
    }
}

export default AppContainer