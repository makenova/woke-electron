import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppContainer from './Containers/app.container'

class App extends React.Component {
    render (){
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <AppContainer />
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render( <App />,
    document.getElementById('content')
);
