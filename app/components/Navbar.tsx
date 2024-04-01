import Link from "next/link";
import { FC } from "react";

import { sections } from "../constants/sections";

const Navbar: FC = () => {
    return (
        <nav className="fixed top-0 right-0 flex items-center space-x-4 bg-gray-800 px-4 py-2 inline-flex" id="navbar">
            {sections.map((section) => (
                <Link key={section} className="hover:text-gray-200" href={`#${section.toLowerCase()}`}>
                    {section}
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;
