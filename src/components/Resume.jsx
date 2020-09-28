import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Box } from "@material-ui/core"
import Navbar from "./Navbar"

const useStyles = makeStyles(theme => ({
    maintContainer: {
        background: "#233",
        opacity: 0.9,
        marginTop: 20
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid white",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "white white transparent transparent",
            borderWith: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan",
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato",
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "primary",
        color: "white",
        lineHeight: 1,
        padding: "0.5 rem 0 1rem",
        "&:before": {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }

    },
    heading: {
        color: "primary",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}))

const Resume = () => {

    const classes = useStyles()

    return (
        <>
            <Navbar />
            <Box component="header" className={classes.maintContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Working Experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2018</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            html & css
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "white" }}>
                            Lorem ipsum
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "white" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </Box>
                    <br />
                    <br />
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Javascript
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "white" }}>
                            Lorem ipsum
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "white" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </Box>
                    <br />
                    <br />
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2020</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            react | redux
                        </Typography>
                        <Typography variant="body1" align="center" style={{ color: "white" }}>
                            Lorem ipsum
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "white" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </Box>
                    <br />
                    <br />
                </Box>
            </Box>
        </>
    )
}

export default Resume
