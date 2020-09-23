import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from "react-particles-js"

const Home = () => {
    return (
        <div>

            <Navbar />
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 30
                        }
                    }
                }}
                style={{ height: 100 }}
            />
            <Header />
        </div>
    )
}

export default Home
