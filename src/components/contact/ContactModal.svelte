<script>
    export let showModal = false;
    function closeModal() { showModal = false; }
</script>

{#if showModal}
    <div class="fixed inset-0 z-[100] flex items-center justify-center bg-[#050510]/80 backdrop-blur-md transition-opacity">
        <div class="relative w-full max-w-md p-8 rounded-[2rem] border border-purple-500/40 bg-gradient-to-b from-[#1a103c] to-[#0a0a1a] shadow-[0_0_50px_rgba(147,51,234,0.3)] transform scale-100 transition-transform">
            <button on:click={closeModal} class="absolute top-4 right-6 text-purple-400 hover:text-white text-3xl font-bold transition-colors">&times;</button>
            <h3 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">Mis Datos</h3>
            <div class="space-y-4 text-slate-300">
                <div class="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors">
                    <span class="text-xl drop-shadow-[0_0_8px_rgba(147,51,234,0.5)]">📧</span>
                    <div>
                        <p class="text-xs text-purple-400 font-mono tracking-wider">MAIL</p>
                        <a href="mailto:julioakadio@gmail.com" class="font-medium hover:text-white transition-colors">julioakadio@gmail.com</a>
                    </div>
                </div>
                <div class="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
                    <span class="text-xl drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">📱</span>
                    <div>
                        <p class="text-xs text-blue-400 font-mono tracking-wider">TELÉFONO</p>
                        <a href="https://wa.me/56982339305" target="_blank" class="font-medium hover:text-white transition-colors">+56 9 8233 9305</a>
                    </div>
                </div>
                <div class="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors">
                    <span class="text-xl drop-shadow-[0_0_8px_rgba(147,51,234,0.5)]">📍</span>
                    <div>
                        <p class="text-xs text-purple-400 font-mono tracking-wider">UBICACIÓN</p>
                        <p class="font-medium">Santiago de Chile (Lo Barnechea)</p>
                    </div>
                </div>
            </div>
            <div class="mt-8 flex gap-4 justify-center">
                <a href="https://github.com/Akadioo" target="_blank" class="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all shadow-[0_0_15px_rgba(147,51,234,0.4)] hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] hover:-translate-y-1">GitHub</a>
                <a href="https://www.linkedin.com/in/julio-lopez-3b5482244/" target="_blank" class="px-6 py-2 rounded-full border border-blue-500/50 text-blue-300 hover:bg-blue-500/20 hover:text-white font-bold transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-1">LinkedIn</a>
            </div>
        </div>
    </div>
{/if}