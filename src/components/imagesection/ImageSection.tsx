import React, { Component } from 'react'
import { Typography, Button } from '@material-ui/core'

export class ImageSection extends Component {
    render() {
        return (
            <div className="ImageSection">
                <img id="Image" src="/images/band-concert-dark-1644616.jpg"></img>
                <div id="ImageSectionText">
                    <Typography id="TextHeader" variant="h5">
                        ABOUT
                    </Typography>
                    <Typography id="Description" variant="subtitle1">
                        Find out about us, our mission and
                        how we will make it happen.
                    </Typography>
                    <Button id="LearnMoreButton" variant="contained" color="primary">Learn more</Button>
                </div>
            </div>
        )
    }
}