import currencies from "./data/supported-currencies.json";

const CurrencySelector = ({currency, updateCurrency}) => {
  return (
    <div>
      <span>Select Currency: </span>
      <select onChange={(e) => updateCurrency(e.target.value)} value={currency}>
        {currencies.map((obj) => (
          <option key={obj.currency} value={obj.currency}>{obj.currency}: {obj.country}</option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
