import React, { useRef, useState, useEffect } from "react";
export { Subway } from '../subwayRef';

export const useConsumeComponent =  (consumerAggregateName, componentName) => {
  const [mountFunctions, setMountFunctions] = useState(null);
  useEffect(() => {
    Subway
      .selectAggregate(consumerAggregateName)
      .publicChannel()
      .importComponent(
        componentName,
        (fns) => {
          setMountFunctions(fns)
        }
      );
  }, [])
  return ImportedComponent(mountFunctions);
};

function ImportedComponent(props) {
  const { mount = null, unmount = null } = (props || {})
  const _ref = useRef(null);
  useEffect(() => {
    if(mount && _ref && _ref.current) {
      mount({}, { container: _ref.current })
    }
    return () => {
      if(unmount && _ref && _ref.current) {
        unmount({ container: _ref.current })
      }
    };
  });

  return (
    <div ref={_ref} />
  );
}
