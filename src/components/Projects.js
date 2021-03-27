import React from 'react'
import ReactPlayer from 'react-player'
import {makeStyles, Paper, Container, Grid, useTheme, useMediaQuery} from '@material-ui/core'
import RealHomeDescription from './projectsElements/RealHomeDescription'
import NetworkDescription from './projectsElements/NetworkDescription'

const useStyles = makeStyles((theme) => ({
    videoGrid: {
        backgroundColor: 'grey', 
        border: '10px solid grey', 
        borderRadius: 5,
    },
}))


function Projects() {
    const classes = useStyles()

    const theme = useTheme()
    const matchesSmall = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <Container style={{ padding: 30 }}>
            <Paper style={{ marginBottom: 30 }}>
                <Grid container style={{ padding: 20 }}>
                    <Grid item xs={12} sm={12} md={6} style={{ paddingRight: !matchesSmall && 30 }}>
                        <RealHomeDescription />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} className={classes.videoGrid} >
                        <ReactPlayer 
                            style={{ borderRadius: 5, overflow: "hidden" }}
                            url='RealHome4-Trimmed.m4v' 
                            width='100%' 
                            height='100%' 
                            muted={true} 
                            playing={true} 
                            controls={true}
                        />
                    </Grid>
                </Grid>
            </Paper>
        
            <Paper style={{ marginBottom: 150 }}>
                <Grid container style={{ padding: 20 }}>
                    <Grid item xs={12} sm={12} md={6} style={{ paddingRight: !matchesSmall && 30 }}>
                        <NetworkDescription />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} className={classes.videoGrid}>
                        <ReactPlayer 
                            style={{ borderRadius: 5, overflow: "hidden" }}
                            url='Network-trimmed.m4v'
                            width='100%' 
                            height='100%' 
                            muted={true} 
                            playing={true} 
                            controls={true}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Projects
