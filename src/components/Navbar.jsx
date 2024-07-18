import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between max-w-4xl ">
                <nav className="flex-1 flex space-x-10 text-denim-200 text-lg">
                    <Link to="/">/</Link>
                    <Link to="/projects">projects</Link>
                    <Link to="/contact">contact</Link>
                </nav>
            </div>
        </>

    );
}

export default Navbar;