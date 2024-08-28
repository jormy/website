function Tooltip({ text }: { text: string }) {
  return (
    <div className="absolute -mt-9 w-auto min-w-max origin-bottom translate-x-[-30%] scale-0 rounded-md bg-denim-200 px-2 py-1 text-sm text-denim-950 shadow-md transition-all duration-100 group-hover:scale-100">
      {text}
    </div>
  );
}

export default Tooltip;
