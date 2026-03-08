<script lang="ts">
    // Definimos la estructura para soportar múltiples enlaces por proyecto
    interface ProjectLink {
        label: string;
        url: string;
    }

    interface Project {
        title: string;
        subtitle: string;
        description: string;
        tags: string[];
        links: ProjectLink[];
        image: string;
    }

    let selectedProject: Project | null = null;

    const projectsData: Record<string, Project> = {
        astralis: {
            title: "MangaNoStore (Astralis Group)",
            subtitle: "Desarrollador Web Full Stack (Proyecto Freelance)",
            description: "Plataforma web tipo catálogo digital desarrollada para Astralis Group. Implementada con una arquitectura full stack separando servicios (Frontend en SvelteKit, Backend en NestJS con Fastify). Apliqué principios de Arquitectura Hexagonal y DDD para la comunicación entre repositorios mediante APIs. Destaca el diseño y desarrollo de un panel de administración personalizado para que el cliente gestione fácilmente productos, contenido visual y configuraciones, automatizando los procesos administrativos y reduciendo el tiempo de mantenimiento del sitio.",
            tags: ["NESTJS", "FASTIFY", "SVELTEKIT", "ARQUITECTURA HEXAGONAL"],
            image: "/imagenes/mangaweb.jpg",
            links: [
                { label: "FRONTEND", url: "https://github.com/Akadioo/Manga-web-Fronend" },
                { label: "CRUD BACKEND", url: "https://github.com/Akadioo/Manga-crud-backend" },
                { label: "CONSUMER BACKEND", url: "https://github.com/Akadioo/Manga-consumer-backend" }
            ]
        },
        vetmongo: {
            title: "Vetmongo",
            subtitle: "Sistema de Salud & Gestión",
            description: "Sistema integral de gestión clínica diseñado para centros veterinarios. Construido para manejar de forma eficiente el control de historiales médicos, registro detallado de pacientes y agenda de citas. Utiliza MongoDB como base de datos documental para flexibilizar la estructura de los datos clínicos. La plataforma centraliza la información, facilitando el acceso rápido a diagnósticos y tratamientos, optimizando el flujo de trabajo diario del personal administrativo y médico bajo estándares de seguridad.",
            tags: ["NESTJS", "MONGODB", "SVELTE", "API REST"],
            image: "/imagenes/vetmongo.jpg",
            links: [
                { label: "VER CÓDIGO FUENTE", url: "https://github.com/Akadioo/Vetmongo" }
            ]
        },
        portfolio: {
            title: "Portafolio Profesional",
            subtitle: "Desarrollo Personal",
            description: "Diseño y desarrollo de mi sitio web personal utilizando SvelteKit y Tailwind CSS. El proyecto implementa una arquitectura modular de componentes, modales interactivos para detalles de proyectos y un diseño responsivo con estética cromada moderna. Está optimizado para el rendimiento y la accesibilidad, sirviendo como muestra tangible de mis capacidades técnicas como Analista Programador y mi dominio de las tecnologías frontend actuales.",
            tags: ["SVELTEKIT", "TAILWIND CSS", "TYPESCRIPT", "ARQUITECTURA MODULAR"],
            image: "/imagenes/perfil.jpg", // Puedes cambiar esto por una captura de la web si quieres
            links: [
                { label: "VER CÓDIGO FUENTE", url: "https://github.com/Akadioo/Portfolio-Julio-Lopez" }
            ]
        }
    };

    function openModal(projectId: string) {
        selectedProject = projectsData[projectId];
    }

    function closeModal() {
        selectedProject = null;
    }

    function handleKeydown(event: KeyboardEvent, projectId: string) {
        if (event.key === 'Enter' || event.key === ' ') {
            openModal(projectId);
        }
    }
</script>

<section id="proyectos" class="py-24 relative">
    <div class="mx-auto max-w-7xl px-6">
        <div class="mb-16">
            <h2 class="text-4xl font-bold text-white tracking-tight">Proyectos Destacados</h2>
            <p class="mt-4 text-slate-400 max-w-2xl text-lg">
                Aplicaciones reales donde la <span class="text-purple-400 drop-shadow-[0_0_8px_rgba(147,51,234,0.5)]">seguridad</span> y el <span class="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">rendimiento</span> son la prioridad.
            </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            
            <div 
                role="button" 
                tabindex="0" 
                on:click={() => openModal('astralis')} 
                on:keydown={(e) => handleKeydown(e, 'astralis')}
                class="glass card-hover group flex flex-col rounded-3xl overflow-hidden h-full border border-purple-500/10 hover:border-purple-500/40 cursor-pointer outline-none focus:ring-2 focus:ring-purple-500/50"
            >
                <div class="h-56 flex items-center justify-center relative overflow-hidden group-hover:bg-[#0f0f2a] transition-colors duration-500 border-b border-purple-500/20">
                    <div class="absolute inset-0 bg-purple-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                    <img src="/imagenes/mangaweb.jpg" alt="MangaNoStore" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                </div>

                <div class="p-8 flex flex-col flex-grow bg-gradient-to-b from-[#0a0a1a]/50 to-transparent">
                    <span class="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2 drop-shadow-[0_0_5px_rgba(147,51,234,0.5)]">E-commerce / Freelance</span>
                    <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">MangaNoStore</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                        Catálogo digital con panel administrativo personalizado. Arquitectura desacoplada integrando APIs.
                    </p>
                    <div class="flex flex-wrap items-center gap-2 mt-auto">
                        <span class="px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-[10px] font-semibold text-purple-300">VER DETALLES →</span>
                    </div>
                </div>
            </div>

            <div 
                role="button" 
                tabindex="0" 
                on:click={() => openModal('vetmongo')} 
                on:keydown={(e) => handleKeydown(e, 'vetmongo')}
                class="glass card-hover group flex flex-col rounded-3xl overflow-hidden h-full border border-blue-500/10 hover:border-blue-500/40 cursor-pointer outline-none focus:ring-2 focus:ring-blue-500/50"
            >
                <div class="h-56 flex items-center justify-center relative overflow-hidden border-b border-blue-500/20">
                    <div class="absolute inset-0 bg-blue-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                    <img src="/imagenes/vetmongo.jpg" alt="Vetmongo" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                </div>

                <div class="p-8 flex flex-col flex-grow bg-gradient-to-b from-[#0a0a1a]/50 to-transparent">
                    <span class="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">Salud & Gestión</span>
                    <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Vetmongo</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                        Sistema de gestión clínica para centros veterinarios con base de datos documental MongoDB.
                    </p>
                    <div class="flex flex-wrap items-center gap-2 mt-auto">
                        <span class="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-semibold text-blue-300">VER DETALLES →</span>
                    </div>
                </div>
            </div>

            <div 
                role="button" 
                tabindex="0" 
                on:click={() => openModal('portfolio')} 
                on:keydown={(e) => handleKeydown(e, 'portfolio')}
                class="glass card-hover group flex flex-col rounded-3xl overflow-hidden h-full border border-purple-500/10 hover:border-purple-500/40 cursor-pointer outline-none focus:ring-2 focus:ring-purple-500/50"
            >
                <div class="h-56 flex items-center justify-center relative overflow-hidden border-b border-purple-500/20">
                    <div class="absolute inset-0 bg-purple-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                    <img src="/imagenes/perfil.jpg" alt="Portafolio Profesional" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                </div>

                <div class="p-8 flex flex-col flex-grow bg-gradient-to-b from-[#0a0a1a]/50 to-transparent">
                    <span class="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2 drop-shadow-[0_0_5px_rgba(147,51,234,0.5)]">Desarrollo Personal</span>
                    <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Mi Portafolio</h3>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                        Sitio web profesional desarrollado con SvelteKit y Tailwind CSS. Arquitectura modular y responsiva.
                    </p>
                    <div class="flex flex-wrap items-center gap-2 mt-auto">
                        <span class="px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-[10px] font-semibold text-purple-300">VER DETALLES →</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

{#if selectedProject}
    <div class="fixed inset-0 z-[110] flex items-center justify-center bg-[#050510]/90 backdrop-blur-md transition-opacity p-4">
        <div class="relative w-full max-w-2xl p-8 rounded-[2rem] border border-purple-500/40 bg-gradient-to-b from-[#1a103c] to-[#0a0a1a] shadow-[0_0_50px_rgba(147,51,234,0.3)] max-h-[90vh] overflow-y-auto">
            <button on:click={closeModal} class="absolute top-4 right-6 text-purple-400 hover:text-white text-3xl font-bold transition-colors z-20 bg-[#0a0a1a]/50 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm">&times;</button>
            
            {#if selectedProject.image}
                <div class="w-full h-48 sm:h-64 rounded-xl overflow-hidden mb-6 border border-white/10 relative">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent z-10 opacity-60"></div>
                    <img src={selectedProject.image} alt={selectedProject.title} class="w-full h-full object-cover">
                </div>
            {/if}

            <span class="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2 block relative z-20">{selectedProject.subtitle}</span>
            <h3 class="text-3xl font-bold text-white mb-6 relative z-20">{selectedProject.title}</h3>
            
            <p class="text-slate-300 leading-relaxed mb-8 text-lg">
                {selectedProject.description}
            </p>
            
            <div class="mb-8">
                <h4 class="text-sm text-slate-400 font-mono mb-3 uppercase tracking-tighter">Tecnologías aplicadas:</h4>
                <div class="flex flex-wrap gap-2">
                    {#each selectedProject.tags as tag}
                        <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 tracking-wider">
                            {tag}
                        </span>
                    {/each}
                </div>
            </div>
            
            <div class="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-white/10">
                {#each selectedProject.links as link}
                    <a href="{link.url}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600/20 border border-purple-500/50 text-purple-300 hover:bg-purple-600 hover:text-white font-bold transition-all shadow-[0_0_15px_rgba(147,51,234,0.2)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        {link.label}
                    </a>
                {/each}
            </div>
        </div>
    </div>
{/if}