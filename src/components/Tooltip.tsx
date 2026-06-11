"use client";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

function Tooltip({
  text,
  children,
}: {
  text: string;
  children: React.ReactElement;
}) {
  return (
    <Tippy
      content={text}
      theme="glass"
      placement="top"
      animation="shift-away"
      delay={[0, 200]}
    >
      {children}
    </Tippy>
  );
}

export default Tooltip;
