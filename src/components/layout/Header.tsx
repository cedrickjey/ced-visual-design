import Link from 'next/link';
import Image from 'next/image';
import "../../styles/main.css";

export default function Header() {
  return (
    <header className="header flex items-center dark-background sticky top-0">
      <div className="container mx-auto relative flex items-center justify-between w-full px-4">
        <div className="">
          <Link href="/" className="flex items-center me-auto me-xl-0">
            <Image className='rounded-full border-2 border-[#b9972f]' src="/images/logo.png" width={60} height={100} alt="Logo" />
          </Link>
        </div>

        <nav  className="navmenu">
          <ul className="flex space-x-6">
            <li className='font-bold' ><Link href="/" className="active">Home</Link></li>
            <li className='font-bold' ><Link href="/projects" className="">Portfolio</Link></li>
            <li className='font-bold' ><Link href="/about" className="">About</Link></li>
            <li className='font-bold' ><Link href="/contact" className="">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle lg:hidden bi bi-list">icon</i>
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