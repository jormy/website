"use client";

import { Command } from "cmdk";
import { AnimatePresence, motion as m } from "framer-motion";
import localFont from "next/font/local";
import * as React from "react";
import { FaDiscord, FaHome } from "react-icons/fa";
import { FaCode, FaPencil } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardCommandKey } from "react-icons/md";
import { TbBrandGithubFilled, TbBrandTwitterFilled } from "react-icons/tb";
import GradientCard from "../gradientCard/GradientCard";

const sfPro = localFont({
  src: "../../../public/fonts/SF-Pro.ttf",
  variable: "--font-sf-pro",
  display: "swap",
});

export default function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  React.useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  const link = ({ href }: { href: string }) => {
    window.open(href, "_blank");
  };

  function Item({
    name,
    icon,
    command,
  }: {
    name: string;
    icon: React.ReactNode;
    command: () => unknown;
  }) {
    return (
      <Command.Item
        onSelect={() => runCommand(command)}
        value={name}
        className="cursor-pointer"
      >
        <div className="flex flex-grow items-center rounded-md px-3 py-2 transition hover:bg-black-900/[0.5]">
          <div className="mr-3 h-4 w-4 text-black-50">{icon}</div>
          <span className="text-black-200">{name}</span>
        </div>
      </Command.Item>
    );
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const commands = {
    General: [
      {
        name: "Source",
        icon: <FaCode />,
        command: () => link({ href: "https://github.com/jormy/website" }),
      },
      {
        name: "Copy Link",
        icon: <IoIosLink />,
        command: () => {
          navigator.clipboard.writeText("https://jorm.lol");
        },
      },
    ],
    Navigation: [
      {
        name: "Home",
        icon: <FaHome />,
        command: () => (window.location.href = "/"),
      },
      {
        name: "Projects",
        icon: <FaPencil />,
        command: () => (window.location.href = "/projects"),
      },
    ],
    Socials: [
      {
        name: "Github",
        icon: <TbBrandGithubFilled />,
        command: () => link({ href: "https://github.com/jormy" }),
      },
      {
        name: "Discord",
        icon: <FaDiscord />,
        command: () =>
          link({ href: "https://discordapp.com/users/743010360340250725" }),
      },
      {
        name: "Twitter",
        icon: <TbBrandTwitterFilled />,
        command: () => link({ href: "https://twitter.com/sirjorm" }),
      },
    ],
  };

  return (
    <>
      <button
        className="flex size-fit items-center justify-center rounded-md p-2 transition hover:bg-black-900/[0.6]"
        onClick={() => setOpen(true)}
      >
        <MdKeyboardCommandKey className="text-xl" />
      </button>
      <AnimatePresence initial={false} mode="wait">
        {open && (
          <m.div
            className="fixed inset-0 z-50 bg-black-950/[0.5] backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            onClick={() => setOpen(false)}
          >
            <m.div
              className="fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Command
                className={`${sfPro.className} z-50 w-[90vw] max-w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-xl`}
              >
                <GradientCard>
                  <div className="mb-4 flex items-center border-b border-black-700 pb-4 pt-1">
                    <IoSearch className="mr-2" />
                    <Command.Input
                      ref={inputRef} // Attach the ref to the input
                      value={value}
                      onValueChange={setValue}
                      placeholder="Type a command or search..."
                      className="flex-grow bg-transparent focus:outline-none"
                    />
                  </div>
                  <Command.List className="max-h-[300px] overflow-y-auto">
                    <Command.Empty className="py-6 text-center text-sm">
                      No results found.
                    </Command.Empty>
                    <div className="space-y-2 divide-y divide-black-900/[0.5]">
                      {Object.entries(commands).map(([group, items]) => (
                        <Command.Group
                          key={group}
                          heading={group}
                          className="space-y-2 pt-3 first:pt-0"
                        >
                          {items.map((item, index) => (
                            <Item key={index} {...item} />
                          ))}
                        </Command.Group>
                      ))}
                    </div>
                  </Command.List>
                </GradientCard>
              </Command>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
