import React from 'react';
import AppBar from 'material-ui/AppBar';

class Title extends React.Component {
    render(){
        return (
        <div className="title">
            <AppBar
                title="Woke"
                showMenuIconButton={false}
            />
        </div>
        )

    }
}

export default Title