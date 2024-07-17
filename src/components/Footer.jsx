import NowPlaying from "./spotify/NowPlaying";

function Footer() {
    return (
        <footer className="text-denim-300 w-full absolute bottom-5 flex justify-between mx-auto mt-20 max-w-3xl border-t-2 border-denim-300/[0.3] py-10">
            <p>&copy; jorm 2024</p>
            <NowPlaying />
        </footer>
    );
}

export default Footer;