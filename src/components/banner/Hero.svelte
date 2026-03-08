<script>
    export let openContact;
</script>

<section id="inicio" class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(147,51,234,0.15)_0%,rgba(5,5,16,0)_60%)]">
    <div class="mx-auto max-w-7xl px-6">
        <div class="grid gap-16 lg:grid-cols-12 lg:items-center">
            <div class="lg:col-span-7 space-y-8 text-center lg:text-left relative z-10">
                <div class="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-300 backdrop-blur-sm shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                    <span class="mr-2 flex h-2 w-2 rounded-full bg-blue-400 animate-pulse drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                    Open to Work
                </div>
                <h1 class="text-5xl font-extrabold tracking-tight sm:text-7xl text-white leading-[1.1]">
                    Analista <span class="text-slate-600">&</span> <br/>
                    <span class="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(147,51,234,0.4)]">Programador.</span>
                </h1>
                <p class="max-w-2xl text-lg text-slate-400 leading-relaxed font-light">
                    Enfocado en el desarrollo de soluciones web funcionales y sistemas digitales prácticos. Combino <b>Frontend</b> y <b>Backend</b> para crear aplicaciones claras, seguras y escalables.
                </p>
                <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                    <a href="#proyectos" class="rounded-xl bg-purple-600 px-8 py-4 font-bold text-white shadow-[0_0_25px_-5px_rgba(147,51,234,0.6)] hover:bg-purple-500 hover:scale-105 transition-all duration-300">
                        Ver Proyectos
                    </a>
                    <button on:click={openContact} class="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white hover:bg-white/10 hover:border-blue-500/50 transition-all flex items-center justify-center gap-2 group">
                        Contactar
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>
            <div class="lg:col-span-5 relative">
                <div class="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-full"></div>
                <div class="glass rounded-3xl p-8 relative overflow-hidden group border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                    <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h3 class="mb-8 font-bold text-white text-center lg:text-left text-lg flex items-center gap-2">
                        <span class="w-2 h-8 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)]"></span>
                        Core Tech Stack
                    </h3>
                    <div class="grid grid-cols-3 gap-6">
                        <div class="flex flex-col items-center gap-3 group/icon p-2 rounded-xl hover:bg-purple-500/10 transition-colors cursor-default">
                            <img src="https://cdn.simpleicons.org/nestjs/E0234E" class="w-10 h-10 drop-shadow-[0_0_10px_rgba(224,35,78,0.3)] group-hover/icon:scale-125 group-hover/icon:-translate-y-1 transition-all" alt="NestJS">
                            <span class="text-[10px] font-bold text-slate-500 group-hover/icon:text-purple-300 transition-colors">NESTJS</span>
                        </div>
                        <div class="flex flex-col items-center gap-3 group/icon p-2 rounded-xl hover:bg-blue-500/10 transition-colors cursor-default">
                            <img src="https://cdn.simpleicons.org/postgresql/4169E1" class="w-10 h-10 drop-shadow-[0_0_10px_rgba(65,105,225,0.3)] group-hover/icon:scale-125 group-hover/icon:-translate-y-1 transition-all" alt="PostgreSQL">
                            <span class="text-[10px] font-bold text-slate-500 group-hover/icon:text-blue-300 transition-colors">POSTGRES</span>
                        </div>
                        <div class="flex flex-col items-center gap-3 group/icon p-2 rounded-xl hover:bg-green-500/10 transition-colors cursor-default">
                            <img src="https://cdn.simpleicons.org/nodedotjs/339933" class="w-10 h-10 drop-shadow-[0_0_10px_rgba(51,153,51,0.3)] group-hover/icon:scale-125 group-hover/icon:-translate-y-1 transition-all" alt="Node.js">
                            <span class="text-[10px] font-bold text-slate-500 group-hover/icon:text-green-300 transition-colors">NODE.JS</span>
                        </div>
                        <div class="flex flex-col items-center gap-3 group/icon p-2 rounded-xl hover:bg-orange-500/10 transition-colors cursor-default">
                            <img src="https://cdn.simpleicons.org/svelte/FF3E00" class="w-10 h-10 drop-shadow-[0_0_10px_rgba(255,62,0,0.3)] group-hover/icon:scale-125 group-hover/icon:-translate-y-1 transition-all" alt="Svelte">
                            <span class="text-[10px] font-bold text-slate-500 group-hover/icon:text-orange-300 transition-colors">SVELTE</span>
                        </div>
                        <div class="flex flex-col items-center gap-3 group/icon p-2 rounded-xl hover:bg-cyan-500/10 transition-colors cursor-default">
                            <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" class="w-10 h-10 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)] group-hover/icon:scale-125 group-hover/icon:-translate-y-1 transition-all" alt="Tailwind">
                            <span class="text-[10px] font-bold text-slate-500 group-hover/icon:text-cyan-300 transition-colors">TAILWIND</span>
                        </div>
                        <div class="flex flex-col items-center gap-3 group/icon p-2 rounded-xl hover:bg-yellow-500/10 transition-colors cursor-default">
                            <img src="https://cdn.simpleicons.org/linux/FCC624" class="w-10 h-10 drop-shadow-[0_0_10px_rgba(252,198,36,0.3)] group-hover/icon:scale-125 group-hover/icon:-translate-y-1 transition-all" alt="Linux">
                            <span class="text-[10px] font-bold text-slate-500 group-hover/icon:text-yellow-300 transition-colors">LINUX</span>
                        </div>
                    </div>
                    <div class="mt-8 pt-6 border-t border-purple-500/20 text-center">
                        <p class="text-xs text-slate-500 font-mono">
                            > focus: <span class="text-blue-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">clean_code</span> && <span class="text-purple-400 drop-shadow-[0_0_5px_rgba(147,51,234,0.5)]">security+</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>