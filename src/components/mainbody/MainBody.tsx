import React, { Component } from 'react'
import Button from "@material-ui/core/Button"
import { Typography } from '@material-ui/core'
import { ImageSection } from "../imagesection/ImageSection"


export class MainBody extends Component {
    render() {
        return (
            <div className="MainBody">
                <Typography id="mainBodyHeader" variant="h4">
                    We match artists with event organizers,
                   in a fun and quick way.
                </Typography>
                <Typography id="mainBodyText" variant="subtitle1">
                    Music is part of our everyday life, but unfortunately that doesn't make it easier for artists to promote themselves and get the attention they deserve. We at Stage Me Up aim to bridge the gap where artists and venues can find each other easily. Venues take care of the venue, and artists take care of their music.
                    We do the rest!
                </Typography>
                <ImageSection />
            </div>
        )
    }
}