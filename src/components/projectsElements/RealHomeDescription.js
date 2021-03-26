import React from 'react'
import { Divider, Typography, Link} from '@material-ui/core'

function RealHomeDescription() {

  return (
    <>
      <Typography variant="button" style={{ fontSize: 20 }}>
        <Link href="https://anushhambaryan.pythonanywhere.com/real-home">
          Real Home
        </Link>
      </Typography>

      <Divider style={{ backgroundColor: 'grey', marginBottom: 10 }} />

      <Typography  variant="body2" align="justify" paragraph>
        I built this project from scratch to teach myself 
        {" "}<Link href="https://reactjs.org/">React</Link> and 
        {" "}<Link href="https://www.django-rest-framework.org/">Django REST Framework</Link>.
        I used 
        {" "}<Link href="https://material-ui.com/">Material-UI</Link> for the User Interface, 
        {" "}<Link href="https://james1345.github.io/django-rest-knox/">Django-Rest-Knox</Link> to build token authentication functionality, 
        {" "}<Link href="https://www.npmjs.com/package/google-map-react">google-map-react</Link> and 
        {" "}<Link href="https://www.npmjs.com/package/react-geocode">react-geocode</Link> for the map and location markers,
        {" "}<Link href="https://reactrouter.com/">React Router</Link> for frontend routing, and 
        {" "}<Link href="https://pypi.org/project/django-imagekit/">django-imagekit</Link> for image optimization on the backend.
      </Typography>

      <Typography variant="body2" align="justify" paragraph>
        It is a platform, where registered users can add real estate for sale or rent, view, edit
        and delete their own listings. Unregistered users can only visit the Home page to search for
        listings utilizing the filters.
      </Typography>
            
      <Typography variant="body2" align="justify" paragraph>
        Please visit the website <Link href="https://anushhambaryan.pythonanywhere.com/real-home">here</Link>.
        To get the full experience, register or sign in with the
        following credentials - {" "}
        <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
          Username: anna
        </Typography>, {" "}
        <Typography component="span" variant="body2" style={{ fontWeight: 'bold' }}>
          Password: anna2021
        </Typography>
      </Typography>

      <Typography variant="body2" color="secondary" style={{ marginTop: 10 }}>
        The website can have glitches on Safari, please use Chrome!
      </Typography>

      <Divider style={{ backgroundColor: 'grey', marginBottom: 10, marginTop: 10, height: 0.5 }} />
        
      <Typography variant="body2">Frontend source code is available 
        {" "}<Link href="https://github.com/Anush-Hambaryan/Real-Home-Frontend">here</Link>.
      </Typography>
        
      <Typography variant="body2" style={{marginBottom: 10}}>Backend source code is available
        {" "}<Link href="https://github.com/Anush-Hambaryan/Real-Home-Backend">here</Link>.
      </Typography>   
    </>
  )
}

export default RealHomeDescription
