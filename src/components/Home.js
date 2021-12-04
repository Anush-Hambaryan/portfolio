import React from "react"
import { Typography, Box, useMediaQuery, useTheme, Divider, Grid, makeStyles, Link } from "@material-ui/core"
import { EmailOutlined, Phone, GitHub, LinkedIn } from "@material-ui/icons"

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
    },
    footer: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        marginBottom: '15px',
        alignItems: 'center',
    },
    contact: {
        marginRight: 8, 
        display: 'flex', 
        alignItems: 'center',
        fontSize: 9
    }

}))

function Home() {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXs = useMediaQuery(theme.breakpoints.down("xs"))

    const technologies = [ "JavaScript", "Angular", "React", "Typescript", "HTML", "CSS", "Python", "Django", "Django Rest Framework", "SQL", "Git"]

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
        <div>
        <Box id="home-box" style={{ 
                paddingLeft: matchesXs ? 30 : matchesSm ? 50 : 100, 
                paddingTop: matchesXs ? 25 : matchesSm ? 100 : 200,
                color: "white",
                backgroundColor: "black",
            }}
        >
            <Typography style={{ paddingBottom: 20, fontSize: matchesXs ? 28 : 40 }}>Anush Hambaryan</Typography>
            <Typography>Software Developer</Typography>
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
        <Grid container  className={classes.footer} justify="center">
            <div className={classes.contact} >
                <EmailOutlined style={{ marginRight: 3, fontSize: 16 }}/> 
                anushhambaryan@gmail.com 
            </div>

            <div className={classes.contact}>
                <Phone style={{ marginRight: 3, fontSize: 16 }} /> 
                +374 (93) 96-05-27 
            </div>

            <Link href="https://github.com/Anush-Hambaryan" underline="none" color="inherit" style={{ marginRight: 8 }}>  
                <GitHub style={{ fontSize: 16 }}  /> 
            </Link>

            <Link href="https://www.linkedin.com/in/anush-hambaryan-1ab8ab5b/" underline="none" color="inherit"> 
                <LinkedIn style={{ fontSize: 18 }} />
            </Link>
        </Grid>
    </div>
    )
}

export default Home
