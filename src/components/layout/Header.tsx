import React, { FC } from 'react';
import Link from 'next/link';

// Définition du type pour une route
type Route = {
  name: string;
  path: string;
};

interface HeaderProps {
  routes: Route[];
}   

const Header : FC<HeaderProps> = ({ routes }) => {

  return (
    <header id="header" className="header flex items-center light-background sticky top-0">
      <div className="container-fluid relative flex items-center justify-between w-full px-4 py-2">

        <Link href="/" className="logo flex items-center me-auto me-xl-0">
          <img src="assets/img/logo.png" alt="" />
          <h1 className="">Cedrick</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul className="flex space-x-6">
            <li><Link href="/" className="active text-blue-500">Home</Link></li>
            <li><Link href="/" className="hover:text-blue-500">About</Link></li>
            <li><Link href="/" className="hover:text-blue-500">Resume</Link></li>
            <li><Link href="/" className="hover:text-blue-500">Services</Link></li>
            <li><Link href="/" className="hover:text-blue-500">Portfolio</Link></li>
            <li className="dropdown"><Link href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
              <ul>
                <li><Link href="#">Dropdown 1</Link></li>
                <li className="dropdown"><Link href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                  <ul>
                    <li><Link href="#">Deep Dropdown 1</Link></li>
                    <li><Link href="#">Deep Dropdown 2</Link></li>
                    <li><Link href="#">Deep Dropdown 3</Link></li>
                    <li><Link href="#">Deep Dropdown 4</Link></li>
                    <li><Link href="#">Deep Dropdown 5</Link></li>
                  </ul>
                </li>
                <li><Link href="#">Dropdown 2</Link></li>
                <li><Link href="#">Dropdown 3</Link></li>
                <li><Link href="#">Dropdown 4</Link></li>
              </ul>
            </li>
            <li><Link href="contact.html" className="hover:text-blue-500">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle xl:hidden bi bi-list"></i>
        </nav>

        <div className="flex space-x-4">
          <Link href="#" className="text-gray-600 hover:text-blue-500"><i className="bi bi-twitter-x"></i></Link>
          <Link href="#" className="text-gray-600 hover:text-blue-500"><i className="bi bi-facebook"></i></Link>
          <Link href="#" className="text-gray-600 hover:text-blue-500"><i className="bi bi-instagram"></i></Link>
          <Link href="#" className="text-gray-600 hover:text-blue-500"><i className="bi bi-linkedin"></i></Link>
        </div>

      </div>
    </header>
  )
}

export default Header
