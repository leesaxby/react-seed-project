import React from 'react';

import listImage from 'Images/list.png';
import { Grid } from '@material-ui/core';


export default function HeaderRow() {
    return (
        <Grid container justify="center">
            <Grid item>
                <img
                    src={listImage}
                    alt="header"
                    style={{
                        height: '200px',
                        marginBottom: '20px',
                    }} />
            </Grid>
        </Grid>
    );
}
