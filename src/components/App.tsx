import React, { Component } from 'react'
import { Heading } from "./heading/Heading"
import { MainBody } from "./mainbody/MainBody";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
    palette: {
       primary: red,
    }
 });

export class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Heading />
                    <MainBody />
                </div>
            </MuiThemeProvider>
        )
    }
}