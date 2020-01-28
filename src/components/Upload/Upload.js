import React, { Fragment, useState } from 'react';
import { Grid, Paper, InputBase, Button } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';

import './Upload.css';

const Upload = () => {

    const [comment, setComment] = useState('');
    const [image, setImage] = useState([]);
    return (
        <Fragment>
            <Grid item xs={12} className="grid postcard">
                <Paper className="paper" >
                    <form className="form" >
                        <InputBase
                            fullWidth
                            placeholder="Add a comment..."
                            value={comment}
                            onChange={(event) => setComment(event.target.value)}
                        />
                        <DropzoneArea
                            dropzoneText='Select or drop your image'
                            dropzoneClass='dropArea'
                            filesLimit={1}
                            onChange={(files) => setImage(files)}
                            acceptedFiles={['image/*']}
                            showAlerts={false}

                        />
                        <Button
                            className="postbutton"
                            type="submit"
                            color="primary"
                            disable={image.length === 0}
                        >
                            Post
                         </Button>
                    </form>
                </Paper>
            </Grid>
        </Fragment>
    );
}

export default Upload;