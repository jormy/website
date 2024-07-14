import React, { useEffect, useRef, useState } from 'react';

export const Cursor = () => {
    const cursorRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    let timeout;

    const resetOpacity = () => {
        clearTimeout(timeout);
        cursorRef.current.style.opacity = '1';
        timeout = setTimeout(() => {
            cursorRef.current.style.opacity = '0';
        }, 300);
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${isMouseDown ? 1.25 : 1})`;
            resetOpacity();
        };

        const handleMouseDown = () => {
            setIsMouseDown(true);
            cursorRef.current.style.transform += ' scale(2)';
        };

        const handleMouseUp = () => {
            setIsMouseDown(false);
            cursorRef.current.style.transform = cursorRef.current.style.transform.replace(' scale(2)', '');
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            clearTimeout(timeout);
        };
    }, [isMouseDown]);

    return (
        <div
            className="left-0 top-0 w-7 h-7 border-solid border-[1px] rounded-full border-blue-body fixed z-50 pointer-events-none cursor-transitions"
            ref={cursorRef}
            style={{ opacity: 1 }}
        ></div>
    );
};

export default Cursor;
