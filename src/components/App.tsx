import React, { Component } from 'react'
import { Heading } from "./heading/Heading"
import { MainBody } from "./mainbody/MainBody"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import red from '@material-ui/core/colors/red'
import { ImageSection } from './imagesection/ImageSection'
import { ArtistModal } from './artistModal/ArtistModal'

const theme = createMuiTheme({
    palette: {
        primary: red,
    }
})

export class App extends Component {
    state = {
        showDialog: false
    }

    showModal = () => {
        this.setState({
            showDialog: true
        })
    }

    closeDialog = () => {
        this.setState({
            showDialog: false
        })
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <ArtistModal showDialog={this.state.showDialog} closeDialog={this.closeDialog}/>
                    <Heading showModal={this.showModal}/>
                    <MainBody />
                    <ImageSection />
                </div>
            </MuiThemeProvider>
        )
    }
}

