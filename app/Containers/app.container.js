import React from 'react';

import Title from '../components/title.component'

class AppContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Title />
            </div>
        );
    }
}

export default AppContainer