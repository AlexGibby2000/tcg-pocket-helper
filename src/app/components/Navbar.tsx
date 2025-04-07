import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">
            <a>TCG Pocket Helper</a>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">
              <a className="hover:text-gray-400">About</a>
            </Link>
          </li>
          <li>
            <Link href="/features">
              <a className="hover:text-gray-400">Features</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="hover:text-gray-400">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
