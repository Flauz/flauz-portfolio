import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import Navbar from "./Navbar"

const useStyles = makeStyles(theme => ({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "#dfe7ef",
        borderColor: "#dfe7ef"
    }
}))

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#dfe7ef",
        },
        "& label": {
            color: "#dfe7ef"
        },
        "& .MuiOutlinedInput-root": {
            '& fieldset': {
                borderColor: "#dfe7ef"
            }
        },
        "& .Mui-focused fieldset": {
            borderColor: "#dfe7ef"
        }
    }
}
)(TextField)

const Contacts = () => {

    const classes = useStyles()

    return (
        <>
            <Navbar />
            <Box component="div" style={{ opacity: 0.8, background: "#233", height: "100vh" }}>

                <Grid container justify="center">
                    <Box component="form" className={classes.form}>
                        <Typography variant="h5" style={{ color: "#7e858d", textAlign: "center", textTransform: "uppercase" }}>
                            hire or contact me...
                    </Typography>
                        <InputField
                            fullWidth={true}
                            label="Name"
                            variant="outlined"
                            margin="dense"
                            size="medium"
                            inputProps={{ style: { color: "white" } }}
                        />
                        <br />
                        <InputField
                            fullWidth={true}
                            label="Email"
                            variant="outlined"
                            margin="dense"
                            size="medium"
                            inputProps={{ style: { color: "white" } }}
                        />
                        <br />
                        <InputField
                            fullWidth={true}
                            label="Message"
                            variant="outlined"
                            margin="dense"
                            size="medium"
                            inputProps={{ style: { color: "white" } }}
                        />
                        <br />
                        <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
                            contact me
                    </Button>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default Contacts
