import React, { useState } from "react"
import { BrowserRouter as Router, Switch, HashRouter, Redirect, Route, Link} from "react-router-dom"
import { Box, Typography, makeStyles, Menu, MenuItem, IconButton, useTheme, useMediaQuery } from '@material-ui/core'
import { MenuRounded } from '@material-ui/icons'
import '../App.css'
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Resume from "./Resume"

const useStyles = makeStyles((theme) => ({
    link: {
      fontWeight: 'bold',
      textDecoration: "none",
      color: "white",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      '&:hover': {
        textDecoration: "underline",
        textUnderlinePosition: "under",
      }
    },
    root: {
      display: "flex",
      justifyContent: "flex-end",
    },
    scroll: {
      overflowY: 'auto', 
      height: '96vh',
      backgroundColor: '#C0C0C0',
      // https://stackoverflow.com/questions/53772429/material-ui-how-can-i-style-the-scrollbar-with-css-in-js
      '&::-webkit-scrollbar': {
        width: '0.6em',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: '#C0C0C0',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'black',
      }
    },
    iconBtn: {
      backgroundColor: 'white', 
      marginLeft: 30, 
      marginTop: 10, 
      marginBottom: 10,
    }
}))

function NavBar() {
    const classes = useStyles()
    const theme = useTheme()
    const matchesExtraSmall = useMediaQuery(theme.breakpoints.down("xs"))
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    }
  
    const handleClose = () => {
      setAnchorEl(null)
    }

    return (
      <Router>
        {matchesExtraSmall 
        ? 
          <>
            <IconButton className={classes.iconBtn} onClick={handleClick}>
              <MenuRounded />
            </IconButton>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem dense onClick={handleClose} component={Link} to="/portfolio/home">Home</MenuItem>
              <MenuItem dense onClick={handleClose} component={Link} to="/portfolio/about-me">About Me</MenuItem>
              <MenuItem dense onClick={handleClose} component={Link} to="/portfolio/projects">Projects</MenuItem>
              <MenuItem dense onClick={handleClose} component={Link} to="/portfolio/resume">Resume</MenuItem>
            </Menu>
          </>
        :
          <Box p={2} className={classes.root}>
            <Typography className={classes.link} variant="button" component={Link} to="/portfolio/home">Home</Typography>
            <Typography className={classes.link} variant="button" component={Link} to="/portfolio/about-me">About Me</Typography>
            <Typography className={classes.link} variant="button" component={Link} to="/portfolio/projects">Projects</Typography>
            <Typography className={classes.link} style={{ marginRight: 100 }} variant="button" component={Link} to="/portfolio/resume">Resume</Typography>
          </Box>
        }

        <div className={classes.scroll}>
          <HashRouter>
            <Route exact path="/portfolio" render={() => (<Redirect exact from="/portfolio" to="/portfolio/home" />)} /> 
            <Route exact path="/portfolio/home">
              <Home />
            </Route>
            <Route path="/portfolio/about-me">
              <About />
            </Route>
            <Route path="/portfolio/projects">
              <Projects />
            </Route>
            <Route path="/portfolio/resume">
              <Resume />
            </Route>
          </HashRouter>
        </div>
      </Router>
    )
  }
  
export default NavBar