import React from "react"
import { Typography, Container, Paper, Link, useTheme, useMediaQuery } from "@material-ui/core"

function About() {
    const theme = useTheme()
    const matchesExtraSmall = useMediaQuery(theme.breakpoints.down("xs"))

    return (
        <Container style={{ padding: 30 }}>
            <Paper style={{ marginBottom: matchesExtraSmall ? 150 : 30, padding: 20 }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ flexGrow: 1 }}>
                    <Typography variant="body1" paragraph={true} >
                        Hello!
                    </Typography>
                    <Typography variant="body2" paragraph={true}>
                        Thank you for visiting my personal website. 
                    </Typography>
                    <Typography variant="body2" paragraph={true}>
                        I am a web developer passionate about building both front-end and back-end functionality.
                    </Typography>
                    </div>
                <img src="IMG_5822_2.jpg" width="115px" height="115px" style={{ marginLeft: 15, borderRadius: '50%' }}/>
                </div>
                <Typography variant="body2" align="justify" paragraph={true}>
                    I wrote my first lines of code in R and STATA for quantitative courses that I took during my graduate studies in Public Policy.
                    It sparked my interest in programming!
                    Upon graduating in May 2020, I took a few Computer Science courses on edX 
                    (<Link href="https://www.edx.org/course/cs50s-introduction-to-computer-science">
                        CS50's Introduction to Computer Science
                    </Link>,{" "}
                    <Link href="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript?index=product&queryID=6771395a6d47a7dd9140e9db5a7bd534&position=1">
                        CS50's Web Programming with Python and JavaScript
                    </Link>) 
                    to learn more about technology.
                    These courses taught me the basics of programming, and 
                    offered me a rigorous introduction to languages and technologies like C, Python, Django, JavaScript, SQL, HTML, CSS, Git.
                    Most importantly, I realized that I thoroughly enjoy coding and working on technical challenges!  
                </Typography>
                <Typography variant="body2" align="justify" paragraph={true}>   
                    Learning how to code broadened my perspective on how I could progress in my career. I used to see myself exclusively in the public 
                    sector doing work that could potentially make a difference in Armenia. But I came to realize that I love programming more than 
                    anything I have done in the past, and it could also be a powerful tool to make a tangible impact on peoples' lives.
                    Once it was clear that switching into technology was going to be my way forward, I moved on to teaching myself 
                    React and Django Rest Framework by building a{" "}  
                    <Link href="https://anushhambaryan.pythonanywhere.com/real-home">
                        Real Estate transactions platform
                    </Link>{" "}
                    from scratch. I have since been working for IT companies in Armenia contributing to the user-facing functionality of their products.
                </Typography>
            </Paper>
        </Container>
    )    
}

export default About
