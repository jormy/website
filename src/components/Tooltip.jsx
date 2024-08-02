function Tooltip(props) {
  return (
    <div className="absolute -mt-9 w-auto min-w-max origin-bottom translate-x-[-30%] scale-0 rounded-md bg-denim-200 p-1 text-sm text-denim-950 shadow-md transition-all duration-100 group-hover:scale-100">
      {props.text}
    </div>
  );
}

export default Tooltip;
