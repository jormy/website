import { Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";

export default function TransitionPage(props) {
  const location = useLocation();

  return (
    <Transition
      key={location.pathname}
      appear
      show
      as="div"
      enter="transition duration-500 ease-in-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition duration-500 ease-in-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {props.children}
    </Transition>
  );
}
