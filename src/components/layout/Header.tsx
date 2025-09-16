"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../styles/main.css";

export default function Header() {
  const [activeLink, setActiveLink] = useState<string>("/");

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="header flex items-center dark-background sticky top-0">
      <div className="container mx-auto relative flex items-center justify-between w-full px-4">
        {/* Logo */}
        <div>
          <Link  onClick={() => setActiveLink("/")} href="/" className="flex items-center me-auto me-xl-0">
            <Image
              className="rounded-full border-2 border-[#b9972f]"
              src="/images/logo.png"
              width={60}
              height={100}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="navmenu">
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.href} className="font-bold">
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={activeLink === link.href ? "active" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <i className="mobile-nav-toggle lg:hidden bi bi-list">icon</i>
        </nav>

        {/* Réseaux sociaux */}
        <div className="flex space-x-4">
          <Link href="#" className="text-gray-600 hover:text-blue-500">
            <i className="bi bi-twitter-x"></i>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-500">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-500">
            <i className="bi bi-instagram"></i>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-500">
            <i className="bi bi-linkedin"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}
