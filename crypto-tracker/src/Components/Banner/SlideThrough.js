import { makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { TrendingCoins } from '../../Config/api'
import { CryptoState } from '../../CryptoContext'
import { Link } from 'react-router-dom'
import AliceCarousel from "react-alice-carousel";
 
const useStyles = makeStyles((theme) => ({
    SlideThrough: {
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
    SlideThroughitem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textTransform: "uppercase",
        color: "white",
    }
}))

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const SlideThrough = () => {
 const [trending, setTrending] = useState([])

const classes = useStyles()

const { currency, symbol } = CryptoState()

const fetchTrendingCoins = async() => {
    const { data } = await axios.get(TrendingCoins(currency))
    setTrending(data)
}

useEffect(() => {
    fetchTrendingCoins()
}, [currency])
    
const items = trending.map((coin) => {

    let profit = coin.price >= 0

    return (
        <Link className={SlideThrough.item} to={'/coins/${coin.id}'}>
            <img
                src={coin?.image}
                alt={coin.name}
                height="80"
                style={{marginBottom: 10}}
                />  
            <span>
                <span>
                    {coin?.name}
                </span>
                &nbsp;
             <span style={{ fontSize: 22, fontWeight: 500 }}>
                     {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
             </span>
            </span>
        </Link>
    )
})

const responsive = {
    0: {
        items: 2,
    },
    512: {
        items: 4,
    },
}

  return (
    <div className={classes.SlideThrough}>
        <AliceCarousel mouseTracking infinite autoPlayInterval={1000} animationDuration={1500} disableDotsControl
            responsive={responsive} 
            autoPlay
            items={items}/>
    </div>
  )
}

export default SlideThrough