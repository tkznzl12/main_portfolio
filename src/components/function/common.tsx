import { useEffect, useRef } from "react";

export const useInterval = (callback: any, delay: number) => {
  // callback을 저장할 ref를 하나 만들기
  // useRef : 저장공간 또는 Dom요소에 접근하기 위해 사용되는 React hook
  const savedCallback = useRef<any>();
  // callback이 바뀔때마다 ref업데이트
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    // tick이 실행되면 callback 함수 실행
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      // delay에 맞춰서 tick을 실행
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
