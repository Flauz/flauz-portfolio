import React from 'react'
import { motion } from 'framer-motion'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    loader: {
        height: "10px",
        width: "10px",
        margin: "50vh auto",
        borderRadius: "50%",
        background: "white"
    }
})

const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25
            }
        }
    }
}

const Loader = () => {

    const classes = useStyles()

    return (
        <>
            <motion.div
                className={classes.loader}
                variants={loaderVariants}
                animate="animationOne">
            </motion.div>
        </>
    )
}

export default Loader
