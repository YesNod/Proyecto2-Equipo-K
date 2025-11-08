// Helper para convertir URL de YouTube a formato embed

/**
 * Extrae el ID del video de YouTube desde diferentes formatos de URL
 * @param {string} url - URL del video de YouTube
 * @returns {string|null} - ID del video o null si no se puede extraer
 */
export const obtenerIdVideoYoutube = (url) => {
  if (!url) return null;

  // Patrones comunes de URLs de YouTube
  const patrones = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ];

  for (const patron of patrones) {
    const match = url.match(patron);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};

/**
 * Convierte una URL de YouTube a formato embed
 * @param {string} url - URL del video de YouTube
 * @returns {string|null} - URL de embed o null si no es válida
 */
export const convertirUrlAEmbed = (url) => {
  const videoId = obtenerIdVideoYoutube(url);
  if (!videoId) return null;
  
  return `https://www.youtube.com/embed/${videoId}`;
};

