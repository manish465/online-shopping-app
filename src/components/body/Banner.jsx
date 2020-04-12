import React from "react";
import { Paper, Grid, Typography, Button } from "@material-ui/core";
import Avatar from "../../assets/avetar.png";

const Banner = () => {
    return (
        <Paper variant="outlined">
            <Grid xs={12} container>
                <Grid
                    alignContent="center"
                    direction="column"
                    xs={6}
                    container
                    justify="space-around"
                >
                    <Grid>
                        <Typography color="secondary" variant="overline">
                            --2009 Collection
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="h3">Enjoy this</Typography>
                        <Typography variant="h3">Autumn Collection</Typography>
                    </Grid>
                    <Grid>
                        <Button variant="contained" color="secondary">
                            <Typography variant="overline">SHOP NOW</Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid xs={6} container alignContent="center">
                    <img src={Avatar} alt="" />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Banner;
