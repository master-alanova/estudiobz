import React from 'react';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';


const Staff = () => {
    const team = [
        {
            name: "Dra. Érica A. Zajc",
            role: "Abogada Especialista",
            area: "Civil y Comercial",
            initials: "EZ",
            link: "https://wa.me/5491135593634?text=Hola%20Dra.%20Zajc,%20vengo%20desde%20el%20sitio%20web",
            linkedin: "https://www.linkedin.com/company/estudio-bzc/",
            mail: "mailto:[EMAIL_ADDRESS]"
        },
        {
            name: "Dra. Karina Carnovale",
            role: "Abogada Especialista",
            area: "Civil y Comercial",
            initials: "KC",
            link: "https://wa.me/5491131440114?text=Hola%20Dra.%20Carnovale,%20vengo%20desde%20el%20sitio%20web",
            linkedin: "https://www.linkedin.com/company/estudio-bzc/",
            mail: "mailto:[EMAIL_ADDRESS]"
        },
        {
            name: "Dra. Patricia Blanco",
            role: "Abogada Especialista",
            area: "Derecho Laboral (+20 años)",
            initials: "PB",
            link: "https://wa.me/541154748218?text=Hola%20Dra.%20Blanco,%20vengo%20desde%20el%20sitio%20web",
            linkedin: "https://www.linkedin.com/company/estudio-bzc/",
            mail: "mailto:[EMAIL_ADDRESS]"
        },
        {
            name: "Matias Lopez Fiordeliso",
            role: "Mandatario Automotor",
            area: "Gestión Integral",
            initials: "ML",
            link: "https://wa.me/5491161403295?text=Hola%20Matias,%20vengo%20desde%20el%20sitio%20web%20por%20temas%20del%20automotor",
            linkedin: "https://www.linkedin.com/company/estudio-bzc/",
            mail: "mailto:[EMAIL_ADDRESS]"
        },
    ];

    return (
        <section id="equipo" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-contrast mb-4">Nuestro Equipo</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Profesionales comprometidos con la defensa de tus intereses y la protección de tus derechos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="group bg-gray-50 rounded-3xl p-8 text-center hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100 flex flex-col items-center">
                            <div className="w-24 h-24 bg-contrast text-primary rounded-full flex items-center justify-center text-3xl font-bold mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl relative">
                                {member.initials}
                                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full border-4 border-gray-50 flex items-center justify-center group-hover:bg-white transition-colors">
                                    <div className="w-2 h-2 bg-contrast rounded-full"></div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-contrast mb-1">{member.name}</h3>
                            <p className="text-primary-600 font-bold text-sm mb-2 uppercase tracking-wider">{member.role}</p>
                            <p className="text-gray-500 text-sm mb-8 flex-grow">{member.area}</p>

                            <div className="flex flex-col w-full gap-3">
                                <a
                                    href={member.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 rounded-xl text-contrast font-bold hover:bg-contrast hover:text-white hover:border-contrast transition-all shadow-sm"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    WhatsApp
                                </a>
                                <div className="flex justify-center gap-3 mt-2">
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-100 rounded-full hover:bg-primary/20 transition-colors">
                                        <Linkedin className="w-4 h-4 text-contrast" />
                                    </a>
                                    <a href={member.mail} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-100 rounded-full hover:bg-primary/20 transition-colors">
                                        <Mail className="w-4 h-4 text-contrast" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Staff;
