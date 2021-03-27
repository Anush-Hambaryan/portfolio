import React from "react"
import { Typography, Box, useMediaQuery, useTheme } from "@material-ui/core"


function Home() {
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXs = useMediaQuery(theme.breakpoints.down("xs"))

    return ( 
        <Box id="home-box" style={{ 
                paddingLeft: matchesXs ? 30 : matchesSm ? 50 : 100, 
                paddingTop: 250,
                color: "white",
                backgroundColor: "black",
            }}
        >
            <Typography variant="h2" style={{ paddingBottom: 20 }}>Anush Hambaryan</Typography>
            <Typography>Aspiring software developer</Typography>
        </Box>
    )
}

export default Home
