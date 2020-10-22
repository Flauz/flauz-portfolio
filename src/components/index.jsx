import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from "react-particles-js"
import { makeStyles } from '@material-ui/styles'
import Loader from './Loader'
import { motion } from 'framer-motion'

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity: "0.3",

    }
})


const Home = () => {

    const [loading, setLoading] = useState(false)

    const classes = useStyles();

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

    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ height: "100%", width: "100%" }}>

                {!loading ? <Loader /> :
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        <Particles
                            canvasClassName={classes.particlesCanva}
                            height="100%"
                            width="100%"
                            params={{
                                particles: {
                                    number: {
                                        value: 55,
                                        density: {
                                            enable: true,
                                            value_area: 500
                                        }
                                    },
                                    shape: {
                                        type: "circle",
                                        strole: {
                                            width: 1,
                                            color: "tomato"
                                        }
                                    },
                                    size: {
                                        value: 8,
                                        random: true,
                                        anim: {
                                            enable: true,
                                            speed: 10,
                                            size_min: 0.1,
                                            sync: false
                                        }
                                    }
                                }
                            }
                            }

                        />
                        <Header />
                    </motion.div>
                }
            </motion.div>
        </>
    )
}

export default Home
