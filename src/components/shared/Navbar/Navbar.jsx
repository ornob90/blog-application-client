import Button from "@/components/html/Button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navItems = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/my-blogs",
      name: "My Blogs",
    },
    {
      to: "/add-blogs",
      name: "Create Blog",
    },
  ];

  return (
    <div className="border-b  ">
      <nav className="navbar w-[90%] mx-auto max-w-[1440px]">
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems?.map(({ name, to }) => (
                <li>
                  <Link href={to}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
            BlogCanvas
          </h1>
        </div>

        <div className="navbar-end gap-4 text-sm">
          {navItems?.map(({ name, to }) => (
            <li className="list-none nav-button hidden md:block">
              <Link href={to}>{name}</Link>
            </li>
          ))}
          <Button className="ml-6 bg-[#FF3B1D] text-white px-4 py-1">
            Sign Up
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
