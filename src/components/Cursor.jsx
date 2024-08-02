import React, { useEffect, useRef, useState } from "react";

export const Cursor = () => {
  const cursorRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  let timeout;

  const resetOpacity = () => {
    clearTimeout(timeout);
    cursorRef.current.style.opacity = "1";
    timeout = setTimeout(() => {
      cursorRef.current.style.opacity = "0";
    }, 300);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${isMouseDown ? 1.75 : 1})`;
      resetOpacity();
    };

    const handleMouseDown = () => {
      setIsMouseDown(true);
      cursorRef.current.style.transform += " scale(1.75)";
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
      cursorRef.current.style.transform =
        cursorRef.current.style.transform.replace(" scale(1.75)", "");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      clearTimeout(timeout);
    };
  }, [isMouseDown]);

  return (
    <div
      className="cursor-transitions pointer-events-none fixed left-0 top-0 z-50 h-7 w-7 rounded-full border-[1px] border-solid border-denim-300"
      ref={cursorRef}
      style={{ opacity: 1 }}
    ></div>
  );
};

export default Cursor;
