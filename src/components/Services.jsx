import React from 'react';
import { Gavel, Briefcase, Car, FileText, AlertTriangle, FileCheck, RefreshCw, Shield, MapPin, User, MessageCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const legalCivil = {
        title: "Área Civil y Comercial: Soluciones para tu Vida y Patrimonio",
        description: "Abordamos con sensibilidad y rigor técnico los conflictos que afectan a tu entorno más cercano.",
        specialties: [
            { group: "Derecho de Familia", items: ["Divorcios", "Cuidado personal", "Cuota alimentaria", "Adopciones y filiación"] },
            { group: "Gestión Patrimonial", items: ["Sucesiones", "Divisiones de condominio", "Desalojos y amparos"] },
            { group: "Responsabilidad Civil", items: ["Accidentes de tránsito", "Mala praxis"] },
            { group: "Protección de Daños", items: ["Accidentes de tránsito", "Mala praxis", "Amparos"] }
        ],
        responsibles: "Dra. Érica A. Zajc | Dra. Karina Carnovale",
        ctas: [
            { name: "Consulta con Dra. Érica A. Zajc", primary: true, link: "https://wa.me/5491135593634?text=Hola%20Dra.%20Zajc,%20solicito%20consulta%20por%20temas%20Civiles/Comerciales" },
            { name: "Consulta con Dra. Karina Carnovale", primary: false, link: "https://wa.me/5491131440114?text=Hola%20Dra.%20Carnovale,%20solicito%20consulta%20por%20temas%20Civiles/Comerciales" }
        ]
    };

    const legalLaboral = {
        title: "Área Laboral (+20 años de experiencia)",
        description: "Representamos tanto a trabajadores como a empleadores con una trayectoria sólida que garantiza resultados justos.",
        specialties: [
            "Reclamos ante ART y accidentes laborales",
            "Gestión de despidos e intercambios telegráficos",
            "Liquidaciones laborales precisas",
            "Defensa y asesoría integral para empresas"
        ],
        responsible: "Dra. Patricia Blanco",
        cta: { name: "Consulta Laboral con Dra. Patricia Blanco", link: "https://wa.me/541154748218?text=Hola%20Dra.%20Blanco,%20solicito%20consulta%20por%20temas%20Laborales" }
    };

    const autoServices = {
        title: "Gestoría del Automotor (Soluciones Ágiles)",
        description: "Contamos con mandatarios matriculados expertos en la gestión ante Registros Seccionales y organismos competentes.",
        areas: [
            { name: "Compra y Venta Segura", desc: "Trámite registral completo para autos, motos y gestoría náutica.", icon: <RefreshCw className="w-5 h-5" /> },
            { name: "Informes y Diagnóstico", desc: "Verificación de estado de dominio, embargos, inhibiciones y deuda.", icon: <FileText className="w-5 h-5" /> },
            { name: "Documentación y Duplicados", desc: "Cédula Azul, duplicados de título o cédula verde.", icon: <FileCheck className="w-5 h-5" /> },
            { name: "Altas, Bajas y Denuncias", desc: "Inscripción de 0km, bajas por robo y denuncias de venta.", icon: <Car className="w-5 h-5" /> },
        ],
        cta: { name: "Iniciar Trámite Automotor", link: "https://wa.me/5491161403295?text=Hola%20Matías,%20necesito%20iniciar%20un%20tr%C3%A1mite%20del%20automotor" }
    };

    return (
        <section id="servicios" className="pt-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-contrast mb-4"
                    >
                        Nuestros Servicios
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        Excelencia jurídica y soluciones comerciales diseñadas para proteger sus intereses.
                    </motion.p>
                </div>

                <div className="space-y-16">
                    {/* Bloque Legal */}
                    <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                        {/* Civil y Comercial */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-primary/20 text-contrast rounded-2xl">
                                    <Gavel className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-contrast leading-tight">{legalCivil.title}</h3>
                            </div>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {legalCivil.description}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 mb-8 flex-grow">
                                {legalCivil.specialties.map((spec, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <h4 className="font-bold text-secondary-800 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                            {spec.group}
                                        </h4>
                                        <ul className="space-y-1 pl-3.5">
                                            {spec.items.map((item, i) => (
                                                <li key={i} className="text-gray-500 text-sm flex items-start gap-2">
                                                    <span className="text-primary-500 mt-1">
                                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                                    </span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-gray-100">
                                <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                                    <User className="w-4 h-4" />
                                    <span>Responsables: <strong>{legalCivil.responsibles}</strong></span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {legalCivil.ctas.map((cta, i) => (
                                        <a
                                            key={i}
                                            href={cta.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all ${cta.primary
                                                ? 'bg-contrast text-white hover:bg-black shadow-lg hover:shadow-xl'
                                                : 'bg-white text-contrast border-2 border-contrast hover:bg-gray-50'
                                                }`}
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            {cta.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Laboral */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-secondary text-white rounded-2xl">
                                    <Briefcase className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-contrast leading-tight">{legalLaboral.title}</h3>
                            </div>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {legalLaboral.description}
                            </p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {legalLaboral.specialties.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100/50">
                                        <span className="p-1.5 bg-primary/30 text-contrast rounded-lg">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </span>
                                        <span className="text-gray-700 font-medium leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-gray-100">
                                <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                                    <User className="w-4 h-4" />
                                    <span>Responsable: <strong>{legalLaboral.responsible}</strong></span>
                                </div>
                                <a
                                    href={legalLaboral.cta.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-contrast font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all border border-contrast/10"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    {legalLaboral.cta.name}
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bloque Automotor */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-contrast rounded-[2.5rem] p-8 lg:p-16 shadow-2xl text-white relative overflow-hidden"
                    >
                        {/* Decorative background Elements */}
                        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                            <div className="lg:w-1/2 space-y-8">
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                                    <Car className="w-5 h-5 text-primary" />
                                    <span className="text-primary font-bold tracking-wider uppercase text-xs">Gestoría Integral</span>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                                    {autoServices.title}
                                </h3>

                                <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                                    {autoServices.description}
                                </p>

                                <a
                                    href={autoServices.cta.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-contrast font-black rounded-2xl shadow-2xl hover:bg-white hover:scale-105 active:scale-95 transition-all text-lg"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    {autoServices.cta.name}
                                </a>
                            </div>

                            <div className="lg:w-1/2 grid sm:grid-cols-2 gap-4 w-full">
                                {autoServices.areas.map((area, idx) => (
                                    <div key={idx} className="group p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                                        <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            {area.icon}
                                        </div>
                                        <h4 className="text-lg font-bold mb-2 text-white">{area.name}</h4>
                                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                                            {area.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Highlight */}
                        <div className="mt-12 relative z-10 pt-8 border-t border-white/10">
                            <h3 className="text-2xl font-bold mb-4">Gestión de Multas</h3>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 p-6 rounded-2xl border border-white/5">

                                <div className="flex items-center gap-4 text-center md:text-left">
                                    <div className="p-3 bg-red-400/20 text-red-400 rounded-full animate-pulse">
                                        <AlertTriangle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">¿Tenés infracciones pendientes?</p>
                                        <p className="text-sm text-gray-400">Analizamos tu situación y gestionamos el libre deuda en todo el país.</p>
                                    </div>
                                </div>
                                <a
                                    href="https://wa.me/5491161403295?text=Hola%20Matías,%20necesito%20consultar%20por%20multas/infracciones"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm transition-all border border-white/10"
                                >
                                    Consultar Multas
                                </a>
                            </div>

                            <div className="mt-4">
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
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
