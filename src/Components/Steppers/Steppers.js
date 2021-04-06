import React, { useState } from 'react';
import { Paper, Stepper, Step, StepLabel, makeStyles, createMuiTheme } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        width: 500,
        height: 100,
        margin: "2em",
        padding: "1em"
    },
    stepper: {
        width: "auto",
        height: "auto",
        background: "transparent",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",

    },
    icon: {
        "&$activeIcon": {
            color: "#AF4BFB"
        },
        "&$completedIcon": {
            color: "#02D740"
        }
    },
    activeIcon: {},
    completedIcon: {}
}));

export default function Steppers() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(2)
    return (
        <Paper className={classes.root} elevation={0}>
            <Stepper className={classes.stepper} alternativeLabel activeStep={activeStep}>
                <Step key="Connect Tesla">
                    <StepLabel StepIconProps={{ classes: { root: classes.icon, active: classes.activeIcon, completed: classes.completedIcon } }} className={classes.steps}>Connect Tesla</StepLabel>
                </Step>
                <Step key="Add Home">
                    <StepLabel StepIconProps={{ classes: { root: classes.icon, active: classes.activeIcon, completed: classes.completedIcon } }} className={classes.steps}>Add Home</StepLabel>
                </Step>
                <Step key="Select Utility">
                    <StepLabel StepIconProps={{ classes: { root: classes.icon, active: classes.activeIcon, completed: classes.completedIcon } }} className={classes.steps} >Select Utility</StepLabel>
                </Step>
                <Step key="Select Electric Plan">
                    <StepLabel StepIconProps={{ classes: { root: classes.icon, active: classes.activeIcon, completed: classes.completedIcon } }} className={classes.steps}>Select Electric Plan</StepLabel>
                </Step>
            </Stepper>
        </Paper>
    )
}