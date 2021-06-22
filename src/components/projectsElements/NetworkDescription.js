import React from "react"
import { Divider, Typography, Link } from "@material-ui/core"

function NetworkDescription() {
    return (
      <div>
          <Typography  variant="button" style={{ fontSize: 20 }}>
            <Link href="https://anush-network.herokuapp.com/posts/all">
              Network
            </Link>
          </Typography>

          <Divider style={{ backgroundColor: "grey", marginBottom: 10 }} /> 

          <Typography variant="body2" align="justify" paragraph>
            This was the final assignment for 
            {" "}
            <Link href="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript?index=product&queryID=6771395a6d47a7dd9140e9db5a7bd534&position=1">
              CS50's Web Programming with Python and JavaScript
            </Link>. 
            I built everything except for the login and registration functionality and the layout.html, 
            which were already provided in the assignment source code. I used  
            {" "}
            <Link href="https://www.djangoproject.com/">
              Django
            </Link> 
            {" "}
            for the backend and Vanilla JavaScript for the frontend.
          </Typography>

          <Typography variant="body2" align="justify" paragraph>
            It is a website, where registered users can post, comment and like posts, delete and edit their own posts,
            delete their own comments, follow other users. 
            Unregistered users can view other users' posts and their comments.
          </Typography>
            
          <Typography variant="body2" align="justify" paragraph>
            Please visit the website 
            {" "}
            <Link href="https://anush-network.herokuapp.com/posts/all">
              here
            </Link>. 
            To get the full experience, feel free to register or sign in with the
            following credentials - {" "}
            <Typography  component="span" variant="body2" style={{ fontWeight: "bold" }}>
              Username: Vahan, 
            </Typography> {" "}
            <Typography  component="span" variant="body2" style={{ fontWeight: "bold" }}>
              Password: vahan10 
            </Typography>
          </Typography>
          
        <Typography variant="body2" color="secondary" style={{ marginTop: 10 }}>
          The website can malfunction on screen sizes smaller than 400px.
        </Typography>
          
        <Divider style={{ backgroundColor: "grey", marginBottom: 10, marginTop: 10, height: 0.5 }} />
        
        <Typography style={{ marginBottom: 10 }} variant="body2">
          Source code is available 
          {" "}
          <Link href="https://github.com/Anush-Hambaryan/Network">
            here
          </Link>.
        </Typography>
      </div>
  )
}

export default NetworkDescription
