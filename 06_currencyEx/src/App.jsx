import { useState } from 'react'
import InputBox from './assets/component/inputBox'
import useCurrencyInfo from './assets/hook/useCurrency'


function App() {
    let [convertedAmount, setConvertedAmount] = useState(0)
    let [amount, setAmount] = useState(0)
    let [from, setFrom] = useState("usd")
    let [to, setTo] = useState("pkr")

    
    let currencyInfo = useCurrencyInfo(from)
    
    let options = Object.keys(currencyInfo)
    
    const convert = setConvertedAmount( amount * currencyInfo[to])

    const swap = () => {
        setFrom(to)
        setTo(from)
        setAmount(convertedAmount)
        setConvertedAmount(amount)
    }


  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://img.freepik.com/free-vector/forex-trading-with-candle-stick-chart_1017-30885.jpg')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount = {amount}
                              currencyOption = {options}                            
                              selectCurrency={from}
                            
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOption = {options}                             
                              selectCurrency={from}          
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App
