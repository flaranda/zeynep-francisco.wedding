/** @type {import('next').NextConfig} */

import i18next from "./next-i18next.config.js";

const nextConfig = {
  reactStrictMode: true,
  i18n: i18next.i18n,
};

export default nextConfig;
