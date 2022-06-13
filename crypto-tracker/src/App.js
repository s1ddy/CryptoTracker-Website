import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./Components/Header"
import Homepage from "./Pages/Homepage";
import { makeStyles } from "@material-ui/core"

  const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#0C2D48",
    color: "#5C038C",
    minHeight: "100vh",
  },
}));

function App() {

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
