import Link from "next/link";
import {
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
      {/* Left nav items */}
      <div className="flex items-center space-x-6">
        <div className="w-6 h-6 bg-red-600 rounded-sm"></div>
        <Link
          href="#"
          className="uppercase text-sm transition-colors duration-200 hover:text-red-500"
        >
          Decks
        </Link>
        <Link
          href="#"
          className="uppercase text-sm transition-colors duration-200 hover:text-red-500"
        >
          Deck Builder
        </Link>
        <Link
          href="#"
          className="uppercase text-sm transition-colors duration-200 hover:text-red-500"
        >
          Cards
        </Link>
      </div>

      {/* Right side profile + dropdown */}
      <div className="relative group">
        {/* Trigger Icon */}
        <SignedOut>
          <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center cursor-pointer">
            <span className="text-white text-lg font-bold">?</span>
          </div>

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 flex flex-col bg-white text-black shadow-md rounded-lg py-2 px-3 z-10 min-w-[140px] space-y-1 text-sm font-medium">
            <SignInButton mode="modal">
              <button className="text-left px-3 py-1.5 hover:bg-gray-100 rounded-md w-full">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="text-left px-3 py-1.5 hover:bg-gray-100 rounded-md w-full">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="w-8 h-8 rounded-full">
            <UserButton />
          </div>

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 flex flex-col bg-white text-black shadow-md rounded-lg py-2 px-3 z-10 min-w-[160px] space-y-1 text-sm font-medium">
            <Link
              href="/collection"
              className="text-left px-3 py-1.5 hover:bg-gray-100 rounded-md w-full"
            >
              My Collection
            </Link>
            <Link
              href="/profile"
              className="text-left px-3 py-1.5 hover:bg-gray-100 rounded-md w-full"
            >
              Profile
            </Link>
            <Link
              href="/my-decks"
              className="text-left px-3 py-1.5 hover:bg-gray-100 rounded-md w-full"
            >
              My Decks
            </Link>
            <SignOutButton>
              <button className="text-left px-3 py-1.5 hover:bg-gray-100 rounded-md w-full">
                Log Out
              </button>
            </SignOutButton>
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
