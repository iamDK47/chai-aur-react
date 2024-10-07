import React from "react";
import { useEffect, useState } from "react";

function useCurrencyInfo(){
   const [data,setData] = useState(currency)
   useEffect( () => {
      fetch('https://v6.exchangerate-api.com/v6/48bde13f46476dd9aada0a1f/latest/usd')
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
   } , [currency])
   return data
}

export default useCurrencyInfo