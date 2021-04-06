import React from 'react';
import { Paper, makeStyles, Typography, FormControl, InputAdornment, Select, Fab, Button } from '@material-ui/core';
import { CheckCircleRounded } from '@material-ui/icons';
import optiwatt from '../../assets/optiwatt.svg';
import leap from '../../assets/leap.svg';

const useStyles = makeStyles(() => ({
    root: {
        width: 500,
        height: 500,
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        flexWrap: 'wrap',
        margin: "auto",
        padding: "1em",
        '& > *': {
        },
    },
    heading: {
        fontWeight: "bold",
    },
    text: {
        padding: 0
    },
    form: {
        width: "90%"
    },
    icon: {
        color: "#02D740"
    },
    select: {
        '&:after': {
            borderColor: "#AF4CFB",
        },
    },
    companies: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    logos: {
        width: 120,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2em 1em"
    },
    List: {
        width: 350,
        textAlign: "left"
    },
    ul: {
        padding: 0,
        width: 400,
        textAlign: "left",
        "& > li": {
            margin: "1em"
        }
    },
    btn: {
        width: 350,
        displat: "flex",
        margin: 0,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    fab: {
        background: "#AF4CFB",
        color: "white",
        textTransform: "capitalize",
        marginRight: "1em",
        float: "left",
        "&.MuiFab-root": {
            width: 170,
        },
        "&:hover": {
            background: "#AF4CFB",
        }
    },
    textBtn: {
        color: "#AF4CFB",
        float: "left",
        textTransform: "capitalize",
    },
    disclaimer: {
        fontSize: "8.5pt",
        marginTop: "1em",
        width: 350
    }
}));

export default function Steps() {
    const classes = useStyles();
    return (
        <Paper elevation={0} className={classes.root}>
            <Typography gutterBottom className={[classes.heading, classes.text].join(" ")} align="center">Select Utility</Typography>
            <Typography gutterBottom variant="body2" className={classes.text} align="center">Select your utility provider...</Typography>
            <TextField />
            <Companies />
            <List />
            <ButtonsContainer />
            <Typography align="left" className={classes.disclaimer}>
                By clicking Authorize, Leap, our 3rd party provider, will connect to
                your ultility company meter and enable Optiwatt to support the grid
            </Typography>
        </Paper>
    );
};

function TextField() {
    const classes = useStyles();
    return (
        <FormControl className={classes.form}>
            <Select
                className={classes.select}
                native
                startAdornment={
                    <InputAdornment position="start">
                        <CheckCircleRounded fontSize="small" className={classes.icon} />
                    </InputAdornment>
                }
            >
                <option value={10}>SDG&amp;E</option>
                <option value={20}>Leap</option>
                <option value={30}>Optiwatt</option>
            </Select>
        </FormControl>
    )
}

function Companies() {
    const classes = useStyles();
    return (
        <div className={classes.companies}>
            <Paper elevation={3} className={classes.logos}>
                <img src={optiwatt} />
            </Paper>
            <Paper elevation={3} className={classes.logos}>
                <img src={leap} />
            </Paper>
        </div>
    )
};

function List() {
    const classes = useStyles();
    return (
        <div className={classes.List}>
            <Typography className={classes.heading} align="left">Support Your Local Grid</Typography>
            <ul className={classes.ul}>
                <li>Help reduce CO2 and grid blackouts by delaying charging during high electricity demand.</li>
                <li>Optiwatt will notify you prior to these rare events and automatically resume charging immediately afterwards.</li>
                <li>You can opt-out at anytime</li>
            </ul>
        </div>

    )
}

function ButtonsContainer() {
    const classes = useStyles();
    return (
        <div className={classes.btn}>
            <Fab
                className={classes.fab}
                variant="extended"
                size="small"
            >
                Authorize
            </Fab>
            <Button
                className={classes.textBtn}
            >
                Skip for Later
            </Button>
        </div>
    )
}