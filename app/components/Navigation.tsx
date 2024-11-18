"use client"
import { usePathname, useRouter } from "next/navigation"

interface NavLink {
    name: string;
    href: string;
}

interface NavigationProps {
    navLinks: NavLink[];
}

const Navigation: React.FC<NavigationProps> = ({ navLinks }) => {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <nav className="bg-slate-500">
            <ul>
                {navLinks.map((link) => {
                    const isActive = pathname.endsWith(link.href);
                    return (
                        <li
                            key={link.name}
                            className={isActive ? "bg-blue-400" : "bg-slate-500"}
                        >
                            <button type="button" onClick={() => router.push(link.href)}>
                                {link.name}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
