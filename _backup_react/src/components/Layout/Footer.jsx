import React from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert("Mensaje enviado. Nos pondremos en contacto a la brevedad.");
    };

    return (
        <footer id="contacto" className="bg-secondary-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Contactanos</h2>
                        <p className="text-gray-400 mb-8 max-w-md">
                            Estamos listos para asesorarte. Acercate a nuestras oficinas o escribinos.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg">Lomas de Zamora</h4>
                                    <p className="text-gray-400">Loria 341</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg">CABA</h4>
                                    <p className="text-gray-400">Av. Belgrano 615</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-8">
                                <a href="https://instagram.com" className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-secondary-900 transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="https://wa.me/5491100000000" className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-secondary-900 transition-colors">
                                    <MessageCircle className="w-5 h-5" />
                                </a>
                                <a href="mailto:info@estudiobz.com" className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-secondary-900 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-bold mb-6">Envianos tu consulta</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Nombre</label>
                                <input
                                    type="text"
                                    className="w-full bg-secondary-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Tu nombre completo"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-secondary-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="tucorreo@ejemplo.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Motivo</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-secondary-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Describe brevemente tu caso..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-secondary-900 font-bold py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
                            >
                                Enviar Mensaje
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Estudio BZ. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
