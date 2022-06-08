 import { Container, makeStyles, Typography } from '@material-ui/core'
import {  } from '@material-ui/styles'
import React from 'react'
import SlideThrough from './SlideThrough'
 
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
                color: "white",
            }}>
                TrackChain
            </Typography>
            <Typography variant="subtitle2" style={{
                color: "white",
                textTransform: "capitalize",
                fontFamily: "Ubuntu",
                fontWeight: "bold",
            }}
            >
                Live and updated information on the Crypto coins!
            </Typography>

            </div>
            <SlideThrough />
         </Container>
         
    </div>
   )
 }
 
 export default Banner