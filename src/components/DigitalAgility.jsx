import React from 'react';
import { Smartphone, Globe, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const DigitalAgility = () => {
    return (
        <section id="gestiones" className="relative overflow-hidden text-white pt-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className=" rounded-2xl p-8 shadow-sm text-white relative overflow-hidden bg-contrast rounded-[2.5rem] p-8 lg:p-16 shadow-2xl"
                    >
                        {/* Decorative background Elements */}
                        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold tracking-wide uppercase text-primary">Agilidad Digital</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Resolvé tus trámites <br className="hidden md:block" />
                            <span className="text-primary">sin moverte de tu casa</span>
                        </h2>

                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            En <strong>Estudio BZ</strong> entendemos el valor de tu tiempo. Implementamos un sistema de <strong>Gestoría Integral Online</strong> para que puedas iniciar, seguir y finalizar tus gestiones de manera 100% remota y segura. Ofrecemos asesoría por videollamada y gestión de documentos digitales con validez legal.
                        </p>
                        <a
                            href="https://wa.me/5491135593634?text=Hola%20Dra.%20Zajc,%20solicito%20consulta%20por%20temas%20de%20Gestoría%20Integral%20Online"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-contrast font-black rounded-2xl shadow-2xl hover:bg-white hover:scale-105 active:scale-95 transition-all text-lg"
                        >
                            <Globe className="w-6 h-6" />
                            Comenzar Trámite Online
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DigitalAgility;
