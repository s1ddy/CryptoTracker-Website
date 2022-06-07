 import { Container, makeStyles, Typography } from '@material-ui/core'
import {  } from '@material-ui/styles'
import React from 'react'
 
const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: "url(./Banner.avif)",
        fill: "cover",
    },
    bannerContent: {
        height: 500,  
        display: "flex",
        flexDirection: "column",
        paddingTop: 25, 
        justifyContent: "space-around",
    },
    bannerTagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    }

}))

 const Banner = () => {
    const classes = useStyles()    

   return (
     <div className={classes.banner}>
         <Container className={classes.bannerContent}>
            <div className={classes.bannerTagline}>
            <Typography variant="h2" style={{
                fontWeight: "bold",
                marginBottom: 15,
                fontFamily: "Ubuntu",
            }}>
                TrackChain
            </Typography>
            <Typography variant="subtitle2" style={{
                color: "darkgrey",
                textTransform: "capitalize",
                fontFamily: "Ubuntu",
            }}
            >
                Live and updated information on the Crypto coins!
            </Typography>

            </div>
         </Container>
         
    </div>
   )
 }
 
 export default Banner