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
        color: theme.palette.secondary.main, 
        marginTop: 20,
    },
    box: {
        marginLeft: 20,
        color: theme.palette.secondary.main, 
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

    const technologies = ["JavaScript", "React", "Python", "Django", "Django Rest Framework", "SQL", "Git"]

    const renderTechnologies = () => {
        return (technologies.map((item, index) => {
            return (
                <>
                    <Typography variant="body2">{item}</Typography>
                    {!matchesSm && (index !== technologies.length - 1)
                        &&
                    <Divider orientation="vertical" flexItem className={classes.divider}/>}
                </>
            )
        }))
    }

    return ( 
        <Box id="home-box" style={{ 
                paddingLeft: matchesXs ? 30 : matchesSm ? 50 : 100, 
                paddingTop: matchesXs ? 100 : 200,
                color: "white",
                backgroundColor: "black",
            }}
        >
            <Typography variant="h2" style={{ paddingBottom: 20 }}>Anush Hambaryan</Typography>
            <Typography>Aspiring software developer</Typography>
                {!matchesSm 
                    ? 
                <Grid container alignItems="center" className={classes.grid}>
                    <Typography variant="body2" component="span" className={classes.skills}>Technical skills:</Typography>
                    {renderTechnologies()}
                </Grid>
                    :
                <>
                <Typography variant="body2" className={classes.skills}>Technical skills:</Typography>
                <Box className={classes.box}>
                    {renderTechnologies()}
                </Box>
                </>
                }
        </Box>
    )
}

export default Home
