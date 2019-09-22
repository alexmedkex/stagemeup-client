import React, { Component } from 'react'
import image from "../../assets/imgs/band-concert-dark-1644616.jpg"


export class ImageSection extends Component {
    render() {
        return (
            <div className="ImageSection">
                <img src={image}></img>
            </div>
        )
    }
}