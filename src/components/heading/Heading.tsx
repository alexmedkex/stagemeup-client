import React, { Component } from 'react'
import Button from "@material-ui/core/Button"

interface IProps {
    showModal: () => void
}


export class Heading extends Component<IProps> {
    render() {
        const { showModal } = this.props

        return (
            <div className="Heading">
                <div id="headerActionBar">
                    <Button id="textbtn" variant="text">Home</Button>
                    <Button id="textbtn" variant="text">About</Button>
                    <Button id="textbtn" variant="text">Artists</Button>
                </div>
                <h1 id="MainText">We want to hear more live music!</h1>
                <Button onClick={() => showModal()} variant="contained" color="primary">
                    SIGN ME UP
                </Button>
            </div>
        )
    }
}
