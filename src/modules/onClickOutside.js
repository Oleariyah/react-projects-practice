import React, { useEffect } from "react";

export default function useOnClickOutside(ref, handler) {
  // console.log(ref.current);
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchend", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchend", listener);
    };
  }, [ref, handler]);
}
