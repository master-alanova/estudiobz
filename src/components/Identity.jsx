import React from 'react';
import { Users, Zap, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const Identity = () => {
    const pillars = [
        {
            icon: <Users className="w-8 h-8 text-primary-600" />,
            title: "Atención Personalizada",
            description: "Entendemos que cada caso es único. Te escuchamos y acompañamos en todo el proceso."
        },
        {
            icon: <Zap className="w-8 h-8 text-primary-600" />,
            title: "Rapidez y Efectividad",
            description: "Gestionamos tus trámites con la mayor celeridad para que obtengas resultados pronto."
        },
        {
            icon: <Scale className="w-8 h-8 text-primary-600" />,
            title: "Asesoramiento Experto",
            description: "Contamos con un equipo de profesionales especializados en Derecho Civil, Laboral y Gestoría."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="identidad" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-contrast mb-4"
                    >
                        Por qué elegir Estudio BZ
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto italic font-medium"
                    >
                        "No solo resolvemos casos; contenemos personas"
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group text-center md:text-left"
                        >
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-bold text-contrast mb-3">{pillar.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Identity;
