import React from "react"
import { Typography, Box, useMediaQuery, useTheme, Divider, Grid, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    divider: {
        backgroundColor: 'white',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 2,
        height: 9,
        marginTop: 4.6,
    },
    grid: {
        color: 'white',
        marginTop: 20,
    },
    skills: { 
        marginRight: 10, 
        color: 'white',
        [theme.breakpoints.down("sm")]: {
            marginTop: 20, 
        }
    }
}))

function Home() {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXs = useMediaQuery(theme.breakpoints.down("xs"))

    const technologies = ["JavaScript", "React", "HTML", "CSS", "Python", "Django", "Django Rest Framework", "Flask", "SQL", "Git"]

    const renderTechnologies = () => {
        return (technologies.map((item, index) => {
            return (
                <>
                {
                matchesSm ?
                    <li style={{fontSize: 14, margin: 10}}>{item}</li>
                : 
                !matchesSm && (index !== technologies.length - 1) ?
                    <>
                        <Typography variant="body2">{item}</Typography>
                        <Divider orientation="vertical" flexItem className={classes.divider}/>
                    </>
                : 
                    <Typography variant="body2">{item}</Typography>
                }
                </>
            )
        }))
    }

    return ( 
        <Box id="home-box" style={{ 
                paddingLeft: matchesXs ? 30 : matchesSm ? 50 : 100, 
                paddingTop: matchesXs ? 60 : matchesSm ? 100 : 200,
                color: "white",
                backgroundColor: "black",
            }}
        >
            <Typography variant="h3" style={{ paddingBottom: 20 }}>Anush Hambaryan</Typography>
            <Typography>Aspiring software developer</Typography>
                {!matchesSm ? 
                    <Grid container alignItems="center" className={classes.grid}>
                        <Typography variant="body2" component="span" className={classes.skills}>Technical skills:</Typography>
                        {renderTechnologies()}
                    </Grid>
                :
                    <>
                    <Typography variant="body2" className={classes.skills}>Technical skills:</Typography>
                    <ul style={{ paddingLeft: 30}}>
                        {renderTechnologies()}
                    </ul>
                    </>
                }  
        </Box>
    )
}

export default Home
