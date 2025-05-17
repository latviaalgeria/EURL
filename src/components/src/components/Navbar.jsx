import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // if you don’t want to use lucide, you can replace these with text

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold text-primary">EURL</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-navy font-semibold">
          <a href="#home" className="hover:text-primary">Home</a>
          <a href="#products" className="hover:text-primary">Products</a>
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-navy focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 space-y-2 text-navy font-semibold">
          <a href="#home" className="block hover:text-primary">Home</a>
          <a href="#products" className="block hover:text-primary">Products</a>
          <a href="#services" className="block hover:text-primary">Services</a>
          <a href="#about" className="block hover:text-primary">About</a>
          <a href="#contact" className="block hover:text-primary">Contact</a>
        </nav>
      )}
    </header>
  );
}
