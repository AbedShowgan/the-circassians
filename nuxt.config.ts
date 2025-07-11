// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      appear: true,
      mode: 'out-in',
    },
    rootAttrs: {
      class: 'flex-1 flex flex-col',
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  css: ['assets/main.css'],

  runtimeConfig: {
    public: {
      scripts: {
        googleTagManager: {
          id: '',
        },
      },
    },
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@vueuse/motion/nuxt',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@nuxt/scripts',
  ],

  // Modules options
  colorMode: {
    classSuffix: '',
  },
  fonts: {
    families: [
      { name: 'Rubik Wet Paint', provider: 'google' },
      { name: 'Playfair Display', provider: 'google' },
      { name: 'Manrope', provider: 'google' },
    ],
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    locales: [
      { code: 'en', name: 'English', file: 'en.ts', isCatchallLocale: true },
      // { code: 'ad', name: 'Адыгэбзэ', file: 'ad.ts' },
      // { code: 'fr', name: 'Français', file: 'fr.ts' },
      // { code: 'tr', name: 'Türkçe', file: 'tr.ts' },
    ],
  },
  ogImage: {
    fonts: ['Playfair Display', 'Manrope'],
    googleFontMirror: true,
  },
  scripts: {
    registry: {
      googleTagManager: true,
    },
  },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'error', 'warning', 'accent', 'night', 'success', 'info'],
    },
  },
})
