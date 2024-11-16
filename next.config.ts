import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Habilita la exportación estática
  trailingSlash: true, // Opcional: genera `index.html` en subcarpetas
  basePath: '/browserx', // Cambiá '/browserx' por tu subdirectorio
    distDir: 'out' // Opcional: cambia el nombre del directorio de salida
};

module.exports = nextConfig;


export default nextConfig;
