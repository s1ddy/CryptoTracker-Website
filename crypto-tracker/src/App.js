import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./Components/Header"
import Homepage from "./Pages/Homepage";
import { makeStyles } from "@material-ui/core"
import CoinPage from "./Pages/CoinPage";

function App() {

  const useStyles = makeStyles (() => ({
    App: {
      backgroundColor: "#192E41",
      color: "black",
      minHeight: "100vh",
    }
  }))

  const classes = useStyles

  return (
    <BrowserRouter>
      <div className="classes.App">
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
