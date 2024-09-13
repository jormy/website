"use client";

import { motion as m } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import CommandMenu from "./CommandMenu";

function NavLink({
  children,
  href,
  setPosition,
}: {
  children: React.ReactNode;
  href: string;
  setPosition: any;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Link
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      href={href}
      className="z-10 rounded-full px-4 py-2"
    >
      {children}
    </Link>
  );
}

function LinkBg({ position }: { position: any }) {
  return (
    <m.div
      animate={position}
      className="absolute z-0 h-10 rounded-full bg-black-300/[0.2]"
    />
  );
}

function Navbar() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="flex max-w-4xl justify-between">
      <nav
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative flex flex-1 text-base text-black-300"
      >
        <NavLink setPosition={setPosition} href="/">
          /
        </NavLink>
        <NavLink setPosition={setPosition} href="projects">
          projects
        </NavLink>
        <NavLink setPosition={setPosition} href="contact">
          contact
        </NavLink>
        <LinkBg position={position} />
      </nav>
      <CommandMenu />
    </div>
  );
}
export default Navbar;
