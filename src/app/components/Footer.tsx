import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} TCG Pocket Helper. All rights
          reserved.
        </p>
        <p>
          Built with ❤️ using{" "}
          <a
            href="https://nextjs.org/"
            className="text-blue-400 hover:underline"
          >
            Next.js
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
