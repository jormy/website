import { motion as m } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 0.3,
    },
  },
  exit: { opacity: 0 },
};

function Backdrop({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <m.div
      className="bg-black-950/[0.5] fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </m.div>
  );
}

export default function Modal({
  handleClose,
  image,
  text,
}: {
  handleClose: React.MouseEventHandler<HTMLDivElement>;
  image: string;
  text: string;
}) {
  return (
    <Backdrop onClick={handleClose}>
      <m.div
        variants={fadeIn}
        className="bg-black-950 border border-black-800 p-5 rounded-lg z-50 text-center space-y-6"
      >
        <h2 className="text-black-100 font-bold text-4xl">{text}</h2>
        <Image
          src={image}
          alt="modal image"
          width={700}
          height={400}
          className="rounded-[inherit] w-[80vw] md:w-full"
        />
        <p className="text-black-300">Click anywhere to dismiss</p>
        {/* fix loading height for images */}
      </m.div>
    </Backdrop>
  );
}
