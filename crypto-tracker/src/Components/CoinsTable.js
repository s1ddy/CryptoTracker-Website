import React from 'react'
import { CoinList } from '../Config/api';
import axios from 'axios'
import { CryptoState } from '../CryptoContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, LinearProgress, TableContainer, TableHead, TextField, Typography, Table, TableRow, TableCell, TableBody, makeStyles, } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core';


export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function  CoinsTable() {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState();
  const [search, setsearch] = useState();

  const history = useNavigate()

  const {currency, symbol} = CryptoState()



  useEffect(() => {
      const fetchCoins = async () => {
    setloading(true)

    const { data } = await axios.get(CoinList(currency))

    setcoins(data)
    setloading(false)

  }
    fetchCoins();

  }, [currency]);

  const handleSearch = () => {
      return coins.filter((coin)=> (
        coin.name.toLowerCase().includes(search) ||  coin.symbol.toLowerCase().includes(search)
      ))
  }

    const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

    const classes = makeStyles(() => ({
     row: {
      backgroundColor: "#16171a",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#131111",
      },
      fontFamily: "Ubuntu",
    },
}));

    
    

  return (
     <ThemeProvider theme={darkTheme}>
     <Container style={{ textAlign: "center"}}>
      <Typography variant="h3" style={{ margin: "18", fontFamily: "Ubuntu", color: "white"}}>
        Today's Crypto Market
      </Typography>
      <TextField label="Search for a coin" variant="outlined" style={{marginBottom: "20", width: "100%",}} onChange={(e)=>setsearch(e.target.value)}/>
        <TableContainer>
           {
             loading ? (
                <LinearProgress style={{ backgroundColor: "blue"}}/>
             ) : (
               <Table>
                 <TableHead>
                    <TableRow>
                     {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                    <TableCell
                      style={{
                        color: "white",
                        fontWeight: "700",
                        fontFamily: "Ubuntu",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                    </TableRow>
                 </TableHead>
                    <TableBody>
                {handleSearch()
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() => history.push(`/coins/${row.id}`)}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span style={{ color: "darkgrey" }}>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
               </Table>
             )
           }
        </TableContainer>
  </Container>
  </ThemeProvider>
)}

