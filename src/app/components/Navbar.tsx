import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const Navbar = () => {
  return (
    <nav className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">Pokemon Pocket Helper</Link>
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
          <SignedOut>
            <SignInButton>
              <button className="hover:text-gray-400">Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className="hover:text-gray-400">Sign Up</button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox:
                    "hover:ring-1 hover:ring-gray-400 transition", // style avatar
                },
              }}
            />
          </SignedIn>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
