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
export default function Navbar() {
  return (
    <nav className="bg-black text-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <div className="w-6 h-6 bg-red-600 rounded-sm"></div>
        <a href="#" className="uppercase text-sm hover:underline">
          Decks
        </a>
        <a href="#" className="uppercase text-sm hover:underline">
          Deck Builder
        </a>
        <a href="#" className="uppercase text-sm hover:underline">
          Cards
        </a>
      </div>
      <div className="relative group">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          {/* Use Clerk UserButton for profile picture + menu */}
        </SignedIn>
        <SignedOut>
          <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center cursor-pointer">
            <span className="text-white text-lg font-bold">?</span>
          </div>
          <div className="absolute right-0 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded-md py-2 px-4">
            <SignInButton mode="modal">
              <button className="block w-full text-left">Sign In</button>
            </SignInButton>
            <SignInButton mode="modal">
              <button className="block w-full text-left">Sign Up</button>
            </SignInButton>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
}
