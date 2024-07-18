import NowPlaying from "./spotify/NowPlaying";

function Footer() {
    return (
        <footer className="text-denim-300 w-full flex flex-col sm:flex-row sm:justify-between mt-auto max-w-3xl border-t-2 border-denim-300/[0.3] p-4 py-10">
            <p className="text-denim-300/[0.7] font-light hidden sm:block">&copy; jorm 2024</p>
            <NowPlaying />
            <p className="block sm:hidden mt-5 text-denim-300/[0.7] font-light">&copy; jorm 2024</p>
        </footer>
    );
}

export default Footer;