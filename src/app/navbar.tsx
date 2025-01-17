"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <nav className="flex bg-gray-800 py-2 px-5 justify-between">
            <div className="flex">
                <h1 className="text-white">Navbar</h1>
                <ul className="flex">
                    <Link href="/">
                        <li className={`mx-2 ${pathname === "/" ? "text-blue-300" : "text-white"} cursor-pointer`}>Home</li>
                    </Link>
                    <Link href="/about">
                        <li className={`mx-2 ${pathname === "/about" ? "text-blue-300" : "text-white"} cursor-pointer`}>About</li>
                    </Link>
                    <Link href="/profile">
                        <li className={`mx-2 ${pathname === "/profile" ? "text-blue-300" : "text-white"} cursor-pointer`}>Profile</li>
                    </Link>
                </ul>
            </div>
            <div>
                <button className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer" onClick={() => router.push("/login")}>
                    Login
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
