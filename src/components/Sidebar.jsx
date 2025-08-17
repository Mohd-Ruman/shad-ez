// components/sidebar/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin/user-management", label: "User Management" },
  { href: "/admin/reports", label: "Reports" },
  { href: "/admin/settings", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col p-4 space-y-2">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={`px-3 py-2 rounded-md transition-colors ${
            pathname === link.href ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
