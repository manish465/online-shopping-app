import React from "react";
import { Paper, Grid, Typography, Button, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Avatar from "../../assets/avetar.png";

const useStyles = makeStyles({
    paper: {
        margin: "40px 5px",
        padding: "10px",
        background: "linear-gradient(45deg, #c6e7ff 30%, #4dffbd  90%)",
    },
});

const Banner = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} variant="outlined">
            <Grid container direction="row">
                <Grid
                    alignContent="center"
                    direction="column"
                    container
                    xs={6}
                    justify="space-evenly"
                >
                    <Grid item>
                        <Typography color="secondary" variant="overline">
                            --2009 Collection
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3">Enjoy this</Typography>
                        <Typography variant="h3">Autumn Collection</Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            endIcon={<ShoppingCartIcon />}
                            variant="contained"
                            color="secondary"
                        >
                            <Typography variant="overline">SHOP NOW</Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={6} container justify="center">
                    <img src={Avatar} alt="AVATAR" />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Banner;
