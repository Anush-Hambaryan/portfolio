import React from 'react'
import {Typography, Container, Paper, Link, List, ListItem, ListItemAvatar } from '@material-ui/core'
import {EmailOutlined, Phone} from '@material-ui/icons'

function About() {

    return (
        <Container style={{ padding: 30 }}>
            <Paper style={{ marginBottom: 100, padding: 20 }}>
                <Typography variant="body1" paragraph={true}>
                    Hello!
                </Typography>
                <Typography variant="body2" align="justify" paragraph={true}>
                    Thank you for visiting my personal website. 
                </Typography>
                <Typography variant="body2" align="justify" paragraph={true}>
                    I am a self-taught developer looking to transition into technology from the non-profit sector.
                </Typography>
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
                    This experience broadened my perspective on how I could progress in my career. I used to see myself exclusively in the public 
                    sector doing work that could potentially make a difference in Armenia. But I came to realize that I love programming more than 
                    anything I have done in the past, and it could also be a powerful tool to make a tangible impact on peoples' lives.
                    
                    Once it was clear that switching into technology was going to be my way forward, I moved on to learning 
                    React and Django Rest Framework by building a Real Estate transactions platform from scratch.
                </Typography>
                <Typography variant="body2" align="justify" paragraph={true}>
                    I think, I have reached a point in my self-teaching journey where I am ready to join a company and do 
                    real-world work. I am looking forward to being a part of this innovative and empowering industry! 
                    Please take a look at my projects and CV. If it seems that I could be a good fit for your company, 
                    please get in touch, I will be grateful for an opportunity to interview!
                </Typography>
                <List dense style={{ marginTop: -15 }}>
                <ListItem style={{ fontSize: 14 }}>
                    <ListItemAvatar>
                        <EmailOutlined />
                    </ListItemAvatar>
                    anushhambaryan@gmail.com
                </ListItem>
                <ListItem style={{ fontSize: 14 }} >
                    <ListItemAvatar >
                        <Phone />
                    </ListItemAvatar >
                    +374 (93) 96-05-27
                </ListItem>
                </List>
            </Paper>
        </Container>
    )    
}

export default About
