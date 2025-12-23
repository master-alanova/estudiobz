import React from 'react';
import { Gavel, Briefcase, Car, FileText, AlertTriangle, FileCheck, RefreshCw, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const legalServices = [
        {
            title: "Civil y Comercial",
            items: ["Sucesiones", "Derecho de Familia", "Daños y Perjuicios", "Contratos"],
            icon: <Gavel className="w-6 h-6" />
        },
        {
            title: "Derecho Laboral",
            items: ["ART y Accidentes", "Despidos", "Trabajo en Negro", "Indemnizaciones"],
            icon: <Briefcase className="w-6 h-6" />
        }
    ];

    const autoServices = [
        { name: "Transferencias", icon: <RefreshCw className="w-5 h-5" /> },
        { name: "Informes de Dominio", icon: <FileText className="w-5 h-5" /> },
        { name: "Cédulas Azules/Rosas", icon: <FileCheck className="w-5 h-5" /> },
        { name: "Altas y Bajas", icon: <Car className="w-5 h-5" /> },
        { name: "Gestión de Multas", icon: <AlertTriangle className="w-5 h-5" /> },
        { name: "Denuncia de Venta", icon: <Shield className="w-5 h-5" /> },
    ];

    return (
        <section id="servicios" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Nuestros Servicios</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Soluciones integrales para tus necesidades legales y del automotor.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Bloque Legal */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-secondary text-white rounded-lg">
                                <ScaleIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary">Estudio Jurídico</h3>
                        </div>

                        <div className="space-y-8">
                            {legalServices.map((service, idx) => (
                                <div key={idx} className="group">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-primary-600 group-hover:scale-110 transition-transform">
                                            {service.icon}
                                        </span>
                                        <h4 className="font-bold text-lg text-secondary-800">{service.title}</h4>
                                    </div>
                                    <ul className="grid grid-cols-2 gap-2 pl-9">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="text-gray-600 text-sm flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bloque Automotor */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary rounded-2xl p-8 shadow-sm text-white relative overflow-hidden"
                    >
                        {/* Decorative background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="p-3 bg-primary text-secondary-900 rounded-lg">
                                <Car className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Gestoría Automotor</h3>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                            {autoServices.map((service, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
                                    <span className="text-primary-300">
                                        {service.icon}
                                    </span>
                                    <span className="font-medium text-gray-100">{service.name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 relative z-10">
                            <div className="bg-primary/20 p-4 rounded-xl border border-primary/30">
                                <p className="text-primary-100 text-sm mb-2 font-semibold uppercase tracking-wider">Destacado</p>
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" />
                                    <p className="text-white text-sm">
                                        Gestión integral de multas e infracciones en todo el país. Resolvemos tu libre deuda.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Helper component for the header icon
const ScaleIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 3h5v5" /><path d="M8 3H3v5" /><path d="M12 22v-8" /><path d="m8 7 4 5 4-5" /><path d="M6 7h12" />
    </svg>
);

export default Services;
