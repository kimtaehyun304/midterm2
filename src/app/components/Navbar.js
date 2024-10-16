import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-purple-600 p-4 text-white">
      <div className="w-9/12 m-auto flex justify-between">
        <div className="font-bold">
          <Link href="/" passHref>
            Home
          </Link>
        </div>
        <div className="font-bold">
          <Link href="/About" passHref>
            about
          </Link>
        </div>
        <div className="font-bold">
          <Link href="/Contact" passHref>
            Contact
          </Link>
        </div>
        <div className="font-bold">
          <Link href="/slug/bar?pid=bar" passHref>
            slug
          </Link>
        </div>
      </div>
    </div>
  );
}
