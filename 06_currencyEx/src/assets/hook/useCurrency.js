import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
   const [data,setData] = useState({})
   useEffect( () => {
      fetch('https://v6.exchangerate-api.com/v6/48bde13f46476dd9aada0a1f/latest/usd')
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      console.log(data)
      // The second .then() accesses the fetched data, specifically extracting the rate
      //  for the specified currency, and updates the data state using setData.
   } , [currency])
   return data
}

export default useCurrencyInfo