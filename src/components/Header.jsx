import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Servicios', href: '#servicios' },
        { name: 'Gestiones Online', href: '#gestiones' },
        { name: 'Nuestro Equipo', href: '#equipo' },
        { name: 'Ir al Estudio', href: '#contacto' },
    ];

    return (
        <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <img
                            decoding="async"
                            loading="lazy"
                            src="/brand_EstudioBZ_fullcolor.svg"
                            alt="Estudio BZ"
                            className="w-40 object-contain"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-secondary hover:text-primary-600 font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://wa.me/5491135593634?text=Hola%20Estudio%20BZ,%20necesito%20asesoría%20urgente%20me%20contacto%20desde%20la%20web"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md transition-transform hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            <Phone className="w-4 h-4" />
                            Consulta Urgente
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-secondary hover:text-primary-600 focus:outline-none p-2"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0">
                    <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-3 text-base font-medium text-secondary hover:bg-gray-50 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://wa.me/5491100000000?text=Hola%20Estudio%20BZ,%20necesito%20asesoría%20urgente"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center mt-4 bg-red-500 text-white px-5 py-3 rounded-lg font-bold shadow-sm"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Consulta Urgente
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
