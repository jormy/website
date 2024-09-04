import Image from "next/image";
import arc from "../../../../public/images/tools/arc.webp";
import figma from "../../../../public/images/tools/figma.webp";
import phone from "../../../../public/images/tools/phone.webp";
import powertoys from "../../../../public/images/tools/powertoys.webp";
import vscode from "../../../../public/images/tools/vscode.webp";

export default function Tools() {
  function Tool({
    name,
    img,
    descr,
  }: {
    name: string;
    img: any;
    descr: string;
  }) {
    return (
      <li className="flex items-center space-x-3">
        <Image src={img} alt={`Image of ${name}`} className="size-8" />
        <div className="transition ease-out hover:translate-x-1">
          <h2 className="text-sm font-semibold text-black-200">{name}</h2>
          <p className="text-[0.8rem] text-black-300">{descr}</p>
        </div>
      </li>
    );
  }

  return (
    <div>
      <ul className="grid grid-cols-2 gap-5">
        <Tool img={arc} name="Arc" descr="Browser of choice" />
        <Tool img={vscode} name="VS Code" descr="IDE of choice" />
        <Tool img={figma} name="Figma" descr="UI Design" />
        <Tool img={powertoys} name="PowerToys" descr="Windows utilities" />
        <div className="col-span-2">
          <Tool
            img={phone}
            name="iPhone 12"
            descr="Served me well until I dropped it"
          />
        </div>
      </ul>
    </div>
  );
}
