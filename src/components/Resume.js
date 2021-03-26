import React from 'react'
import { useTheme, useMediaQuery } from '@material-ui/core'


function Resume() {

    const theme = useTheme()
    const matchesExtraSmall = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <div style={{ height: '93vh' }}>
            <iframe 
                src= {matchesExtraSmall ? "Anush_Hambaryan_CV.pdf#zoom=45" : "Anush_Hambaryan_CV.pdf#zoom=90"}
                width="100%" 
                height="100%"
                style={{ border: 'none' }}
            />
        </div>
    )
}

export default Resume
