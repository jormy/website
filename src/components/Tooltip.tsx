function Tooltip({ text }: { text: string }) {
  return (
    <div className="absolute -mt-9 w-auto min-w-max origin-bottom translate-x-[-30%] scale-0 rounded-md bg-denim-200/[0.1] px-2 py-1 text-sm text-denim-200 backdrop-blur-md border-denim-300 border shadow-md transition-all duration-100 group-hover:scale-100">
      {text}
    </div>
  );
}

export default Tooltip;
