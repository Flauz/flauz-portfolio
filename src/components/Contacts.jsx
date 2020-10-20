import React, { useState, useEffect } from 'react'
import Loader from './Loader'
import { motion } from 'framer-motion'
import axios from "axios"
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
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const classes = useStyles()

    useEffect(() => {
        const loading = () => {
            setTimeout(() => {
                setLoading(true)
            },
                1500
            )
        }
        loading()
    }, [])

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onMsgChange = (e) => {
        setMessage(e.target.value)
    }

    const submitEmail = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            url: "/send",
            data: [name, email, message]
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    const resetForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <>
            {!loading ? <Loader /> :
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Navbar />
                    <Box component="div" style={{ opacity: 0.8, background: "#233", height: "100vh" }}>

                        <Grid container justify="center">
                            <Box component="form" className={classes.form} method="POST" onSubmit={submitEmail}>
                                <Typography variant="h5" style={{ color: "#7e858d", textAlign: "center", textTransform: "uppercase" }}>
                                    Contacts
                    </Typography>
                                <InputField
                                    value={name}
                                    onChange={onNameChange}
                                    fullWidth={true}
                                    label="Name"
                                    variant="outlined"
                                    margin="dense"
                                    size="medium"
                                    inputProps={{ style: { color: "white" } }}
                                />
                                <br />
                                <InputField
                                    value={email}
                                    onChange={onEmailChange}
                                    fullWidth={true}
                                    label="Email"
                                    variant="outlined"
                                    margin="dense"
                                    size="medium"
                                    inputProps={{ style: { color: "white" } }}
                                />
                                <br />
                                <InputField
                                    value={message}
                                    onChange={onMsgChange}
                                    fullWidth={true}
                                    label="Message"
                                    variant="outlined"
                                    margin="dense"
                                    size="medium"
                                    inputProps={{ style: { color: "white" } }}
                                />
                                <br />
                                <Button type="submit" className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
                                    contact me
                    </Button>
                            </Box>
                        </Grid>
                    </Box>
                </motion.div>
            }
        </>
    )

}

export default Contacts
