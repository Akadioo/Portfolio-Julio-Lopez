<script>
    export let openContact;
</script>

<header class="fixed top-0 z-50 w-full border-b border-purple-500/20 glass bg-[#0a0a1a]/40">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" class="flex items-center gap-2 group">
            <span class="text-purple-500 font-mono text-xl font-bold opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(147,51,234,0.5)]">//</span>
            <span class="text-xl font-bold tracking-tight text-white group-hover:tracking-wide transition-all duration-300">
                Akadi<span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">oo</span>
            </span>
        </a>
        <nav class="hidden gap-8 text-sm font-medium md:flex">
            <a href="#sobre-mi" class="hover:text-purple-400 transition-colors relative group">
                Sobre mí
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#proyectos" class="hover:text-blue-400 transition-colors relative group">
                Proyectos
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
            <button on:click={openContact} class="hover:text-purple-400 transition-colors relative group">
                Contacto
                <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </button>
        </nav>
        <button on:click={openContact} class="rounded-full border border-purple-500/50 bg-purple-500/10 px-6 py-2 text-sm font-bold text-purple-300 hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.2)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]">
            Hablemos
        </button>
    </div>
</header>