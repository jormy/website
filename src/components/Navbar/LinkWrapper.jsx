function LinkWrapper(props) {
    return (
        <div className="py-2 px-4 rounded-full hover:bg-denim-300/[0.2] transition ease-in">
            {props.title}
        </div>
    )
}

export default LinkWrapper;