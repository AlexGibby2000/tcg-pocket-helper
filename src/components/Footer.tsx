import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Pocket Trainer Tactics. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
