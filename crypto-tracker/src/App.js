import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./Components/Header"
import Homepage from "./Pages/Homepage";
import { makeStyles } from "@material-ui/core"
import CoinPage from "./Pages/CoinPage";

  const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#0A0F13",
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
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/coin/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
