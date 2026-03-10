import adapter from '@sveltejs/adapter-static'; 

export default {
  kit: {
    adapter: adapter({
      fallback: '404.html' 
    }),
    paths: {
      // Aquí ponemos el nombre exacto de tu repo
      base: process.env.NODE_ENV === 'production' ? '/Portfolio-Julio-Lopez' : '',
    }
  }
};