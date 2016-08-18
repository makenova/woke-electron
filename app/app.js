import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppContainer from './Containers/app.container'

class App extends React.Component {
    render (){
        return (
            <MuiThemeProvider>
                <AppContainer />
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render( <App />,
    document.getElementById('content')
);