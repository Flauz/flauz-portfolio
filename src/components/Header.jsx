import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core'
import Typed from "react-typed"
import Loader from './Loader'


// CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "#adb5bd"
    },
    subtitle: {
        color: "#dfe7ef",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))

const Header = () => {

    const classes = useStyles()

    return (
        <Box className={classes.typedContainer}>
            {/* <Grid container justify="center">
                <Avatar className={classes.avatar} src="" alt="Russel Crowe" />
            </Grid> */}

            <Typography className={classes.title} variant="h4">
                <Typed strings={["Florian Guillot"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Web Developer"]} typeSpeed={40} />
                <br />
                <Typed strings={["React.js/Node.js"]} typeSpeed={40} />
            </Typography>
        </Box>
    )
}

export default Header
