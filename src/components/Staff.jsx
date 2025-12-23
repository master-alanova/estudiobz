import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Staff = () => {
    const team = [
        { name: "Dra. Érica Zajc", role: "Abogada Especialista", area: "Civil y Comercial", initials: "EZ" },
        { name: "Dra. Patricia Blanco", role: "Abogada Especialista", area: "Derecho de Familia", initials: "PB" },
        { name: "Dra. Karina Carnovale", role: "Abogada Especialista", area: "Derecho Laboral", initials: "KC" },
        { name: "Matias Lopez Fiordeliso", role: "Mandatario Automotor", area: "Gestión Integral", initials: "ML" },
    ];

    return (
        <section id="equipo" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-contrast mb-4">Nuestro Equipo</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Profesionales comprometidos con la defensa de tus intereses.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="group bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                            <div className="w-24 h-24 bg-secondary text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                                {member.initials}
                            </div>
                            <h3 className="text-lg font-bold text-contrast mb-1">{member.name}</h3>
                            <p className="text-primary-600 font-medium text-sm mb-2">{member.role}</p>
                            <p className="text-gray-500 text-sm mb-4">{member.area}</p>

                            <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-primary-600 transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-primary-600 transition-colors">
                                    <Mail className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Staff;
