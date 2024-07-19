import Links from "./Links";

function Footer() {
    return (
        <footer className="text-denim-300/[0.7] w-full flex flex-col sm:flex-row sm:justify-between mt-auto border-t-2 border-denim-300/[0.3] p-4 py-10">
            <p className="font-light ">&copy; jorm 2024</p>
            <Links />
        </footer>
    );
}

export default Footer;