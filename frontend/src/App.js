import React, {useState} from 'react'
import Routers from './components/router/Router'

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  
  return (
    <>
      <Routers />
    </>
  )
}

export default App