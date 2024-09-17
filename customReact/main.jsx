import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  tep: 'a',
  prap: {
     href: 'https://google.com/maps',
     targ: '_blank'
  },
  puttar: 'click to open google maps'
}
// reactElement couldnt be parsed into tree and injected into root by read because react has its own render method

const anotherReactElement = React.createElement(
  'a',
  {href: 'https://google.com/maps',target: '_blank'},
  'click me to visit'
)
// this gets parsed because this is consisten with the reacts imbeded render method 

createRoot(document.getElementById('root')).render(

  anotherReactElement

)
