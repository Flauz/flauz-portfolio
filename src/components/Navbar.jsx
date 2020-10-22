import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import clsx from 'clsx';

import Footer from "./Footer"
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    Button,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core"
import {

    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons"
import MenuIcon from '@material-ui/icons/Menu';
import zIndex from '@material-ui/core/styles/zIndex';

// CSS STYLES

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        marginTop: 40,
        width: 250,
        background: "#6C757D",
        height: "100vh",

    },
    listItem: {
        color: "primary"
    },
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        background: "#6C757D"

    },
    drawerPaper: {
        width: drawerWidth,
        background: "#6C757D",
        opacity: 0.95
    },
    drawerHeader: {
        display: 'flex',

        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}))

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts",
        listPath: "/contacts"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })
    const [open, setOpen] = React.useState(false);

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open })
    }

    const classes = useStyles()
    const theme = useTheme()

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const sideList = slider => (
        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider(slider, false)}
        >

            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <>

            <Box component="nav">
                <AppBar
                    position="fixed"
                    style={{ zIndex: 1, top: 0, background: "#222" }}
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}>
                    <Toolbar>

                        <IconButton
                            // onClick={toggleSlider("right", true)}
                            onClick={handleDrawerOpen}
                            edge="start"
                            aria-label="inherit"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <MobilRightMenuSlider
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div style={{ background: "#222" }} className={classes.drawerHeader}>
                        <Typography variant="h5">
                            MENU
                        </Typography>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Box component="div" style={{ background: "#6C757D" }}>
                        <Divider />
                        <List>
                            {menuItems.map((lsItem, key) => (
                                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                                    <ListItemIcon className={classes.listItem}>
                                        {lsItem.listIcon}
                                    </ListItemIcon>
                                    <ListItemText className={classes.listItem} primary={lsItem.listText} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </MobilRightMenuSlider>
            </Box >
        </>
    )
}

export default Navbar
