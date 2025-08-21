// next.config.mjs
import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  
  // Excluir archivos problemáticos específicos
  buildExcludes: [
    /chunks\/manifest\.json$/, 
    /build-manifest\.json$/,
    /middleware-manifest\.json$/,
    /react-loadable-manifest\.json$/
  ],
  
  // Configuración de runtime caching
  runtimeCaching: [
    {
      urlPattern: /\/_next\/static\/.*/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'next-static',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 días
        }
      }
    },
    {
      urlPattern: /\/_next\/image.*/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'next-images',
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 días
        }
      }
    }
  ],
  
  // Excluir archivos que no existen o no necesitan precaching
  exclude: [
    ({ asset }) => {
      // Excluir todos los manifests problemáticos
      if (
        asset.name.includes('manifest') && 
        asset.name.endsWith('.json')
      ) {
        return true;
      }
      
      // Excluir archivos de servidor
      if (asset.name.includes('server')) {
        return true;
      }
      
      // Excluir map files
      if (asset.name.endsWith('.map')) {
        return true;
      }
      
      return false;
    }
  ]
})(nextConfig);