<script>
    import Nav from '../components/nav/Nav.svelte';
    import Hero from '../components/banner/Hero.svelte';
    import ContactModal from '../components/contact/ContactModal.svelte';
    import About from '../components/about/About.svelte';
    import Projects from '../components/projects/Projects.svelte';
    import Footer from '../components/footer/Footer.svelte';

    let isModalOpen = false;
    
    // Esta función se la pasamos a Nav, Hero y About para que abran el modal de ContactModal
    function handleContactClick() {
        isModalOpen = true;
    }
</script>

<svelte:head>
    <title>Julio López | Analista Programador</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</svelte:head>

<div class="bg-[#050510] text-slate-200 antialiased selection:bg-purple-500/30 relative min-h-screen font-['Plus_Jakarta_Sans'] overflow-x-hidden">
    
    <div class="fixed inset-0 z-[-1] tech-grid pointer-events-none opacity-60"></div>
    <div class="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(147,51,234,0.15),rgba(5,5,16,1))]"></div>
    
    <ContactModal bind:showModal={isModalOpen} />
    
    <Nav openContact={handleContactClick} />

    <main>
        <Hero openContact={handleContactClick} />
        <About openContact={handleContactClick} />
        <Projects />
    </main>

    <Footer />
</div>

<style>
    /* Efecto Cristal Cromado Global */
    :global(.glass) { 
        background: rgba(10, 10, 26, 0.4); 
        backdrop-filter: blur(16px); 
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid rgba(147, 51, 234, 0.15); 
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    }

    /* Grilla de fondo adaptada al morado/azul Global */
    :global(.tech-grid) {
        background-size: 50px 50px;
        background-image: linear-gradient(to right, rgba(147, 51, 234, 0.05) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
        mask-image: radial-gradient(circle at 50% 10%, black 50%, transparent 100%);
    }

    /* Animaciones súper suaves para las tarjetas Globales */
    :global(.card-hover) { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
    :global(.card-hover:hover) { 
        transform: translateY(-8px);
        box-shadow: 0 25px 50px -12px rgba(147, 51, 234, 0.25); 
    }
</style>