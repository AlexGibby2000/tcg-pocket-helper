import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">TCG Pocket Helper</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/browse">
              <button className="hover:text-gray-400">Collection</button>
            </Link>
          </li>
          <li>
            <Link href="/account">
              <button className="hover:text-gray-400">Account</button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <button className="hover:text-gray-400">Contact</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
