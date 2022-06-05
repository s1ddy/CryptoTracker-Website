import { AppBar, Container, Toolbar, Select, MenuItem, makeStyles, Typography, createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(()=> ({
  title: {
    flex: 1,
    color: "#896FBC",
    fontFamily: "Ubuntu",
    fontWeight:"bold",
    cursor: "pointer",
  }
}))

const Header = () => {

  const classes = useStyles();

  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    }
  
  })

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color="transparent" position='static'>
      <Container>
        <Toolbar>
          <Typography onClick={() => navigate("/")} className={classes.title} variant="h6">TrackChain</Typography>

          <Select variant="outlined" style={{
            width: 100,
            height: 40,
            marginRight: 15, 
          }}>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header
