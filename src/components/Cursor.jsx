import React from 'react';


export const Cursor = () => {

// TODO: Add scaling on click, timeout for opacity

    let opacity = 1;
    let scale = 1;
    let timeout;


    const cursorRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            const {clientX, clientY} = e;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

            clearTimeout(timeout);
		timeout = setTimeout(() => {
			opacity = 0;
		}, 1000);
        });
    }, [])


    return (
        <div className="left-0 top-0 w-6 h-6 border-solid border-[1px] rounded-full border-blue-body fixed z-50 pointer-events-none cursor-transtions" ref={cursorRef}></div>
    );
}

export default Cursor;