import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from "react-particles-js"
import { makeStyles } from '@material-ui/styles'
import Loader from './Loader'

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity: "0.3",

    }
})


const Home = () => {

    const classes = useStyles();

    return (
        <div style={{ height: "100%", width: "100%" }}>

            <Navbar />
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

        </div>
    )
}

export default Home
