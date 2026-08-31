"use client";

import {
  motion as m,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import {
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import CommandMenu from "./CommandMenu";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

type NavLinkProps = {
  children: ReactNode;
  href: string;
  setPosition: Dispatch<SetStateAction<Position>>;
};

function NavLink({ children, href, setPosition }: NavLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const showHighlight = () => {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();

    setPosition({
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    });
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseEnter={showHighlight}
      onFocus={showHighlight}
      className="relative z-10 rounded-full px-4 py-2"
    >
      {children}
    </Link>
  );
}

function LinkBg({ position }: { position: Position }) {
  return (
    <m.div
      animate={position}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
      }}
      className="absolute z-0 h-10 rounded-full bg-white/10"
    />
  );
}

export default function Navbar() {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const { scrollY } = useScroll();

  const tintOpacity = useTransform(scrollY, [0, 500], [0, 0.55]);

  const blurAmount = useTransform(scrollY, [0, 500], [0, 14]);

  const borderOpacity = useTransform(scrollY, [0, 150], [0, 0.12]);

  const shadowOpacity = useTransform(scrollY, [0, 10, 150], [0, 0, 0.15]);

  const backgroundColor = useMotionTemplate`rgba(10, 12, 18, ${tintOpacity})`;

  const saturationAmount = useTransform(scrollY, [0, 500], [1, 1.2]);

  const backdropFilter = useMotionTemplate`blur(${blurAmount}px) saturate(${saturationAmount})`;

  const borderColor = useMotionTemplate`rgba(255, 255, 255, ${borderOpacity})`;

  const boxShadow = useMotionTemplate`0 12px 30px rgba(0, 0, 0, ${shadowOpacity})`;

  const hideHighlight = () => {
    setPosition((current) => ({
      ...current,
      opacity: 0,
    }));
  };

  return (
    <header className="sticky top-0 z-50 w-full px-2 pt-2">
      <m.div
        style={{
          backgroundColor,
          backdropFilter,
          WebkitBackdropFilter: backdropFilter,
          borderColor,
          boxShadow,
        }}
        className="mx-auto flex max-w-4xl items-center justify-between rounded-full border px-3 py-2"
      >
        <nav
          onMouseLeave={hideHighlight}
          className="relative flex flex-1 items-center text-base text-zinc-300"
        >
          <NavLink setPosition={setPosition} href="/">
            /
          </NavLink>

          <NavLink setPosition={setPosition} href="/projects">
            projects
          </NavLink>

          <NavLink setPosition={setPosition} href="/contact">
            contact
          </NavLink>

          <LinkBg position={position} />
        </nav>

        <CommandMenu />
      </m.div>
    </header>
  );
}
