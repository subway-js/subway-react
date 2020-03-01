import React from 'react'
import { Subway, useMyHook } from 'subway-react'

console.log(Subway)

const App = () => {

  
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App