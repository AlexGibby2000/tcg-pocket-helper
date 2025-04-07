import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const Navbar = () => {
  return (
    <nav className="text-white-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">
            <button className="hover:text-purple-600">
              Pocket Trainer Tactics
            </button>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/browse">
              <button className="hover:text-red-600">Collection</button>
            </Link>
          </li>
          <li>
            <Link href="/builder">
              <button className="hover:text-blue-400">Deck Builder</button>
            </Link>
          </li>
          <SignedOut>
            <SignInButton>
              <button className="hover:text-yellow-400">Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className="hover:text-pink-400">Sign Up</button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <li>
              <Link href="/account">
                <button className="hover:text-yellow-400">Account</button>
              </Link>
            </li>
            <SignOutButton>
              <button className="hover:text-red-500">Log Out</button>
            </SignOutButton>
          </SignedIn>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
