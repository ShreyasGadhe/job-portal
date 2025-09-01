import React from "react";
import Link from "next/link";

// import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <div>
            <Link href="/">
              <h1 className="chillax text-3xl p-4">JOBHUNT</h1>
            </Link>
          </div>
          <div>
            <Link href={"/jobs"}>Browse Jobs</Link>
            <Link href={"/jobs/post"}>Post a Job</Link>
            <Link href={"/dashboard"}>Dashboard</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
