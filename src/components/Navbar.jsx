import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex-1 flex space-x-10 text-denim-200">
            <Link to="/">/</Link>
            <Link to="/projects">projects</Link>
            <Link to="/contact">contact</Link>
        </nav>

    );
}

export default Navbar;