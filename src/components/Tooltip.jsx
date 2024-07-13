function Tooltip(props) {
    return (
        <div className="tooltip bg-blue-light text-midnight -mt-8  text-sm tracking-tight inline-block rounded shadow-lg p-1 translate-x-[-25%] translate-y-[-20%]">{props.text}</div>
    );
}

export default Tooltip;