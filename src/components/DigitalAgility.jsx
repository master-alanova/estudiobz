import React from 'react';
import { Smartphone, Globe, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const DigitalAgility = () => {
    return (
        <section id="gestiones" className="py-20 bg-contrast relative overflow-hidden text-white">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold tracking-wide uppercase text-primary">Agilidad Digital</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Resolvé tus trámites <br className="hidden md:block" />
                            <span className="text-primary">sin moverte de tu casa</span>
                        </h2>

                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            En Estudio BZ entendemos el valor de tu tiempo. Implementamos un sistema de <strong>Gestoría Integral Online</strong> para que puedas iniciar, seguir y finalizar tus gestiones de manera 100% remota y segura.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Trámites del automotor a distancia",
                                "Gestión y pago de multas online",
                                "Asesoramiento legal por videollamada",
                                "Envío de documentación digitalizada"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <ArrowRight className="w-3 h-3 text-primary" />
                                    </div>
                                    <span className="text-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#contacto"
                            className="inline-flex items-center gap-2 bg-primary text-secondary-900 px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors"
                        >
                            Comenzar Trámite Online
                            <Globe className="w-5 h-5" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 relative shadow-2xl">
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary rounded-2xl rotate-12 flex items-center justify-center shadow-lg text-contrast">
                                <Smartphone className="w-10 h-10" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4">Gestión de Multas</h3>
                            <p className="text-gray-400 mb-6">
                                ¿Tenés infracciones que te impiden vender o renovar? Analizamos tu situación y gestionamos el libre deuda al mejor costo y en tiempo récord.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-black/20 p-4 rounded-xl border border-white/5 text-center">
                                    <span className="block text-3xl font-bold text-primary mb-1">24hs</span>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">Informe Inicial</span>
                                </div>
                                <div className="bg-black/20 p-4 rounded-xl border border-white/5 text-center">
                                    <span className="block text-3xl font-bold text-primary mb-1">100%</span>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">Online</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DigitalAgility;
