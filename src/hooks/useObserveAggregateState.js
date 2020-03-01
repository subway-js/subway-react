import * as React from 'react';
export { Subway } from '../subwayRef';

export const useObserveAggregateState = (aggregateName, selector = state => state) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const productsAggregate = Subway.selectAggregate(aggregateName);
        const stopObserving = productsAggregate.observeState(nextState => {
            setData(selector(nextState));
        });
        return () => {
            stopObserving();
        };
    }, []);

    return [data];
};