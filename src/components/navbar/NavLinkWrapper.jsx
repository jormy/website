function LinkWrapper(props) {
  return (
    <div className="rounded-full px-4 py-2 transition ease-in hover:bg-denim-300/[0.2]">
      {props.title}
    </div>
  );
}

export default LinkWrapper;
