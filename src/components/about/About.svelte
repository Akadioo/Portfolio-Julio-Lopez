<script>
    export let openContact;
</script>

<section id="sobre-mi" class="py-24 relative overflow-hidden">
    <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-purple-600/15 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="mx-auto max-w-7xl px-6 relative z-10">
        <div class="grid lg:grid-cols-12 gap-12 items-start">
            <div class="lg:col-span-5 relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-700"></div>
                <div class="glass rounded-2xl p-2 relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden border border-purple-500/20 group-hover:border-purple-500/50 transition-colors">
                    
                    <img src="/imagenes/perfil.jpg" alt="Foto de Perfil" class="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700">
                    
                    <div class="absolute bottom-6 left-6 right-6">
                        <div class="bg-[#050510]/90 backdrop-blur-md border border-purple-500/30 p-4 rounded-xl flex items-center justify-between shadow-xl">
                            <div>
                                <p class="text-xs text-purple-400 font-mono tracking-wider">ESTADO</p>
                                <p class="text-white font-bold text-sm flex items-center gap-2">
                                    <span class="relative flex h-2 w-2">
                                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                      <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                                    </span>
                                    OPEN TO WORK
                                </p>
                            </div>
                            <div class="text-right">
                                <p class="text-xs text-blue-400 font-mono tracking-wider">UBICACIÓN</p>
                                <p class="text-white font-bold text-sm">Santiago, CL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-7 space-y-8">
                <div>
                    <span class="text-purple-400 font-mono text-sm tracking-widest uppercase mb-2 block drop-shadow-[0_0_5px_rgba(147,51,234,0.5)]">/ Who am I?</span>
                    <h2 class="text-4xl font-bold text-white mb-6">Hola, soy <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(147,51,234,0.4)]">Julio</span>.</h2>
                    <div class="space-y-4 text-slate-400 text-lg leading-relaxed">
                        <p>Soy Analista Programador en proceso de titulación, enfocado en el desarrollo de soluciones web funcionales y sistemas digitales prácticos para negocios y proyectos online.</p>
                        <p>Trabajo principalmente en desarrollo web full stack, automatización y estructuración de plataformas digitales, combinando <strong class="text-slate-200 font-semibold">frontend y backend</strong> para crear aplicaciones claras, seguras y fáciles de usar.</p>
                        <p>Durante mi formación he desarrollado proyectos reales aplicando arquitectura web moderna, autenticación de usuarios, control de roles, manejo de bases de datos y consumo de APIs bajo buenas prácticas de desarrollo.</p>
                        <p>También cuento con conocimientos prácticos en <strong class="text-slate-200">Linux y fundamentos de ciberseguridad aplicada</strong> (respaldados por mi certificación CompTIA Security+), lo que me permite construir soluciones considerando estabilidad, organización y seguridad desde el inicio.</p>
                    </div>
                </div>

                <div class="p-6 rounded-2xl bg-white/5 border border-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] transition-all duration-300">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-white font-bold flex items-center gap-2">
                            <svg class="w-5 h-5 text-purple-400 drop-shadow-[0_0_5px_rgba(147,51,234,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Enfoque Actual
                        </h3>
                        <span class="text-xs font-mono text-purple-300 bg-purple-500/20 border border-purple-500/30 px-2 py-1 rounded">HANDS-ON</span>
                    </div>
                    <div class="mb-2 flex justify-between text-sm">
                        <span class="text-slate-300">Desarrollo de Soluciones Web</span>
                        <span class="text-blue-400 font-mono font-bold">100%</span>
                    </div>
                    <div class="h-2 w-full bg-[#0a0a1a] rounded-full overflow-hidden border border-white/5">
                        <div class="h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-500 w-full rounded-full shadow-[0_0_10px_rgba(147,51,234,0.8)] relative">
                            <div class="absolute inset-0 bg-white/20 animate-[pulse_2s_ease-in-out_infinite]"></div>
                        </div>
                    </div>
                    <p class="mt-4 text-xs text-slate-500 font-mono">
                        Full Stack • NestJS • Svelte • Seguridad & Estabilidad
                    </p>
                </div>

                <div class="flex flex-wrap gap-4 pt-2">
                    <button on:click={openContact} class="flex items-center gap-3 px-6 py-3 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:-translate-y-1 transition-all">
                        Hablemos de tu proyecto
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>