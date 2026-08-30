import GradientCard from "@/components/gradientCard/GradientCard";
import Image from "next/image";
import { MdDevices } from "react-icons/md";
import laptop from "../../../../public/images/tools/laptop.webp";
import laptop_off from "../../../../public/images/tools/laptop_off.webp";
import phone from "../../../../public/images/tools/phone.webp";
import phone_off from "../../../../public/images/tools/phone_off.webp";
import keyboard from "../../../../public/images/tools/keyboard.webp";
import keyboard_off from "../../../../public/images/tools/keyboard_off.webp";
import h2c from "../../../../public/images/tools/h2c.webp";
import h2c_off from "../../../../public/images/tools/h2c_off.webp";

export default function Tools() {
  function Tool({
    name,
    img,
    descr,
    altImg,
  }: {
    name: string;
    img: any;
    descr: string;
    altImg?: any;
  }) {
    return (
      <li className="group flex items-center space-x-3">
        <div className="relative h-12 w-12 shrink-0 overflow-visible">
          <Image
            src={img}
            alt={`Image of ${name}`}
            className={
              altImg
                ? "h-12 w-12 object-contain transition-all duration-300 group-hover:scale-125 group-hover:opacity-0"
                : "h-12 w-12 object-contain transition-all duration-300 group-hover:scale-125"
            }
          />
          {altImg ? (
            <Image
              src={altImg}
              alt={`${name} alternate image`}
              className="absolute inset-0 h-12 w-12 object-contain opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100"
            />
          ) : null}
        </div>
        <div className="transition duration-300 ease-out group-hover:translate-x-1">
          <h2 className="text-sm font-semibold text-black-200">{name}</h2>
          <p className="text-[0.8rem] text-black-300">{descr}</p>
        </div>
      </li>
    );
  }

  return (
    <GradientCard>
      <h2 className="mb-3 flex items-center gap-2 text-base text-black-100">
        <MdDevices />
        Tools
      </h2>
      <div className="ml-2">
        <ul className="grid grid-cols-2 gap-5">
          <Tool
            img={laptop_off}
            altImg={laptop}
            name="MacBook Pro"
            descr="Laptop"
          />
          <Tool
            img={h2c_off}
            altImg={h2c}
            name="Bambu Lab H2C"
            descr="3D Printer"
          />
          <Tool
            img={phone_off}
            altImg={phone}
            name="iPhone Air"
            descr="Phone"
          />
          <Tool
            img={keyboard_off}
            altImg={keyboard}
            name="Nuphy Air75 v3"
            descr="Keyboard"
          />
        </ul>
      </div>
    </GradientCard>
  );
}
