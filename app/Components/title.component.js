import React from 'react';
import AppBar from 'material-ui/AppBar';

class Title extends React.Component {
    render(){
        const style={
            
        }
        return (
        <div className="title">
            <AppBar
                style={style}
                title="Woke"
                showMenuIconButton={false}
            />
        </div>
        )

    }
}

export default Title