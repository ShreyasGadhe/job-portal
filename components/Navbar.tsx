import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="job board logo"
                height={40}
                width={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
