import React from 'react'
import Main from './components/Main'

import tiger from './images/tiger.jpg'
import train from './images/train.jpg'

function App() {
  return (
    <div className='App'>
      <Main imageFilePath={tiger} />
      <Main imageFilePath={train} />
    </div>
  )
}

export default App
