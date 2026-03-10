import adapter from '@sveltejs/adapter-static'; // Cambia 'auto' por 'static'

export default {
  kit: {
    adapter: adapter({
      fallback: '404.html' // Recomendado para evitar errores al recargar
    }),
    paths: {
      // IMPORTANTE: Pon aquí el nombre de tu repositorio entre barras
      base: process.env.NODE_ENV === 'production' ? '/nombre-de-tu-repo' : '',
    }
  }
};

