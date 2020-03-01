import React from 'react'
import { useMyHook } from 'subway-react'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App