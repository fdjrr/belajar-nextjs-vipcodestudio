import Link from "next/link";

function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className="fixed left-0 top-10 z-10 h-screen w-60 bg-gray-800">
                <ul className="text-white p-5">
                    <Link href="/">
                        <li className="mx-2 text-white">Home</li>
                    </Link>
                    <Link href="/about">
                        <li className="mx-2 text-white">About</li>
                    </Link>
                    <Link href="/profile">
                        <li className="mx-2 text-white">Profile</li>
                    </Link>
                </ul>
            </nav>
            <div>{children}</div>{" "}
        </>
    );
}

export default AboutLayout;
