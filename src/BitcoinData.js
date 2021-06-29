import { useState, useEffect } from "react"

const BitcoinData = ({ currency }) => {
  const [bitcoinData, setBitcoinData] = useState()

  // Ths simulates componentDidUpdate <<
  //   useEffect(() => {
  //     console.log("Inside useEffect");
  //   });

  useEffect(() => {
    async function getBitcoinData() {
      let res = await fetch(
        `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`
      )
      let data = await res.json()
      setBitcoinData(data.bpi[currency])
    }
    getBitcoinData()
  }, [currency])

  return (
    <div>
      {bitcoinData && (
        <p>
          ${bitcoinData.rate} {bitcoinData.description}
        </p>
      )}
    </div>
  )
}

export default BitcoinData
