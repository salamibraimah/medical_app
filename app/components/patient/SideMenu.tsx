"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  title: string;
  href?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Main Health & Activity",
    children: [
      { title: "Dashboard", href: "/patient" },
      { title: "Appointments", href: "/patient/appointments" },
      { title: "Consultations", href: "/patient/consultations" },
      { title: "Lab Results", href: "/patient/results" },
      { title: "Prescriptions", href: "/patient/prescriptions" },
    ],
  },
  {
    title: "Communication & Alerts",
    children: [
      { title: "Messages", href: "/patient/messages" },
      { title: "Notifications", href: "/patient/notifications" },
    ],
  },
  {
    title: "Personal & Account",
    children: [
      { title: "Profile", href: "/patient/profile" },
      { title: "Settings", href: "/patient/settings" },
    ],
  },
  {
    title: "Payments & Support",
    children: [
      { title: "Billing", href: "/patient/payments" },
      { title: "Support", href: "/patient/support" },
    ],
  },
  {
    title: "Session",
    children: [{ title: "Logout", href: "/logout" }],
  },
];

export default function SideMenu() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-6">
      {menuItems.map((section, sIdx) => {
        const isOpen = openSections.includes(sIdx);

        return (
          <div key={sIdx} className="mb-6">
            <button
              onClick={() => toggleSection(sIdx)}
              className="flex items-center justify-between w-full text-left font-semibold text-gray-600 mb-2"
            >
              {section.title}
              <span
                className={`transition-transform duration-200 ${
                  isOpen ? "rotate-90" : ""
                }`}
              >
                ▶
              </span>
            </button>

            {isOpen && (
              <ul className="space-y-1">
                {section.children?.map((item, idx) => {
                  const isActive = pathname === item.href;

                  return (
                    <li key={idx}>
                      <Link
                        href={item.href || "#"}
                        className={`block px-3 py-2 rounded-lg transition ${
                          isActive
                            ? "bg-blue-100 text-blue-600 font-medium"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </aside>
  );
}
