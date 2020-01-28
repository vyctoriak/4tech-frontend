import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { AccountCircle, Favorite } from '@material-ui/icons';

import './Post.css';

const Post = () => {
    return (
        <Grid item xs={12} className="grid post">
            <Paper className="paper" >
                <div className="user">
                    <AccountCircle />
                    <Typography className="username" variant="subtitle2">Danilo</Typography>
                </div>
                < img className="image" src="https://abrilsuperinteressante.files.wordpress.com/2016/10/super_imgvulcoes_podem_dar_um_ano_de_aviso_antes_de_supererupcoes_0.jpeg" alt="post" />
                <section className="body">
                    <div className="like">
                        <Typography className="people" variant="body2">Liked by 10 people</Typography>
                        <Favorite />
                    </div>
                    <div className="comments">
                        
                    </div>
                </section>
                <hr />
            </Paper>
        </Grid>
    )
};

export default Post;