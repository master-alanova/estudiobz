import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-primary/20 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-contrast tracking-tight mb-6 leading-tight"
                    >
                        Protegemos lo que más valoras: <br className="hidden md:block" />
                        <span className="text-primary-600">tu tranquilidad y tus derechos</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Equipo interdisciplinario enfocado en excelencia jurídica y gestión automotor.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="#servicios"
                            className="w-full sm:w-auto px-8 py-4 bg-primary text-contrast font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-primary-400 transition-all flex items-center justify-center gap-2 group"
                        >
                            Explorar Servicios
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="https://wa.me/5491135593634?text=Hola%20Estudio%20BZ,%20vengo%20desde%20el%20sitio%20web%20necesito%20Asesoría%20Integral"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-secondary border-2 border-gray-100 font-bold rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group"
                        >
                            <MessageCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                            WhatsApp
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        </section>
    );
};

export default Hero;
