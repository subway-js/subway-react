import * as React from 'react'

export { Subway } from './subwayRef';
export { useObserveAggregateState } from './hooks/useObserveAggregateState';
export { useReactToEvent } from './hooks/useReactToEvent';
export { useConsumeComponent } from './hooks/useConsumeComponent';

export const useMyHook = () => {
  let [{
    counter
  }, setState] = React.useState({
    counter: 0
  })

  React.useEffect(() => {
    let interval = window.setInterval(() => {
      counter++
      setState({counter})
    }, 1000)
    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return counter
}
