import React from "react"
import { useTheme, useMediaQuery } from "@material-ui/core"


function Resume() {

    const theme = useTheme()
    const matchesSmall = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesExtraSmall = useMediaQuery(theme.breakpoints.down("xs"))

    return (
        <div style={{ height: "93vh" }}>
            <iframe 
                title="resume"
                src= {matchesSmall ? "Anush_Hambaryan_CV.pdf#zoom=45" : "Anush_Hambaryan_CV.pdf#zoom=90"}
                width="100%" 
                height= {matchesExtraSmall ? "90%" : "100%"}
                style={{ border: "none" }}
            />
        </div>
    )
}

export default Resume
