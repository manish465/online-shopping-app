import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { Person as PersonIcon } from "@material-ui/icons";

const TopBar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Grid container justify="space-between">
                    <Grid xl={6}>
                        <Typography>SMARKET</Typography>
                    </Grid>
                    <Grid xl={6}>
                        <Typography>
                            <Button color="inherit" variant="outlined">
                                <PersonIcon />
                                Login
                            </Button>
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
