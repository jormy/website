import Link from "next/link";

export default function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-full px-4 py-2 transition ease-in hover:bg-denim-300/[0.2]"
    >
      {children}
    </Link>
  );
}
