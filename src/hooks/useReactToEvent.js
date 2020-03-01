import React, { useState, useEffect } from "react";
export { Subway } from '../subwayRef';

export const useReactToEvent = (consumerAggregateName, eventName, fn = null) => {
    const [data, setData] = useState(null);
    useEffect(() => {
      const consumer = Subway.selectAggregate(consumerAggregateName);
      const unsubscribe = consumer.publicChannel().reactToEvent(eventName, (type, payload) => {
        setData(fn ? fn(payload): payload);
      });
      return () => {
        unsubscribe();
      };
    });
    return [data];
};