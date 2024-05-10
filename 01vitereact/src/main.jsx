import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <>
    <h1>Custom  function added - MyApp</h1>
    </>
  )
}

const username = "yo-404"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  // injecting variables at the end
  username
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MyApp />
    
    </React.StrictMode>
)


// using react structure here

// ReactDOM.createRoot(document.getElementById('root')).render(
//     reactElement
// )

