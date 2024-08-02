import Links from "./links/Links";

function Footer() {
  return (
    <footer className="mt-auto flex w-full flex-col border-t-2 border-denim-300/[0.3] p-4 py-10 text-denim-300/[0.7] sm:flex-row sm:justify-between">
      <p className="font-light">&copy; jorm 2024</p>
      <Links />
    </footer>
  );
}

export default Footer;
