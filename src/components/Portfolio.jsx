import React from 'react'
import Navbar from './Navbar'
import projetc1 from "../assets/imageTest.jpg"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto",
        background: "#adb5bd"
    }
})

const Portfolio = () => {

    const classes = useStyles()

    return (
        <>
            <Navbar />
            <Box component="div" className={classes.mainContainer} style={{ marginTop: 30, opacity: 0.8 }}>
                <Grid container justify="center" >
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img"
                                    alt=""
                                    height="140"
                                    image={projetc1}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        projet 1
                                </Typography>
                                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img"
                                    alt=""
                                    height="140"
                                    image={projetc1}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        projet 2
                                </Typography>
                                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img"
                                    alt=""
                                    height="140"
                                    image={projetc1}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        projet 3
                                </Typography>
                                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img"
                                    alt=""
                                    height="140"
                                    image={projetc1}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        projet 4
                                </Typography>
                                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Portfolio