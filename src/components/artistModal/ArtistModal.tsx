import React, { Component } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core'
import axios from 'axios'

interface IProps {
    showDialog: boolean,
    closeDialog: () => void
}

const createArtist = async (name: string) => {
    await axios.post(`http://localhost:8080/artists/${name}`)
}

export class ArtistModal extends Component<IProps> {
    render() {
        const { showDialog, closeDialog } = this.props
        var name = ""

        return (
            <div className="ArtistModal">
                <Dialog open={showDialog} onClose={closeDialog} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter your name to sign up
                    </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            fullWidth
                            onChange={e => { name = e.target.value }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => createArtist(name)} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}