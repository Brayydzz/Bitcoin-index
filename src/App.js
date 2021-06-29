import React, { useState } from 'react';
import CurrencySelector from './CurrencySelector';
import BitcoinData from './BitcoinData';

function App() {
 const [currency, setCurrency] = useState('AUD')

 const updateCurrency = (newCurrency) => {
   setCurrency(newCurrency)
 }
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Bitcoin Index</h1>
      <CurrencySelector {...{currency, updateCurrency}}/>
      <BitcoinData currency={currency}/>
    </div>
  );
}

export default App;