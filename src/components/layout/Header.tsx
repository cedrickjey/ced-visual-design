import Link from 'next/link';
import Image from 'next/image';
import "../../styles/main.css";

export default function Header() {
  return (
    <header className="header flex items-center light-background sticky top-0">
      <div className="container mx-auto relative flex items-center justify-between w-full px-4 py-2">
        <div className="">
          <Link href="/" className="flex items-center me-auto me-xl-0">
            <Image className='rounded-full' src="/images/logo.png" width={60} height={100} alt="Logo" />
          </Link>
        </div>

        <nav  className="navmenu">
          <ul className="flex space-x-6">
            <li><Link href="/" className="active text-blue-500">Home</Link></li>
            <li><Link href="/projects" className="hover:text-blue-500">Portfolio</Link></li>
            <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
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
  );
}