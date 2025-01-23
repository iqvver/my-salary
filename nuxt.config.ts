export default defineNuxtConfig({
    mode: 'static',
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    pages: true,
    ssr: true,
    generate: {
        fallback: "404.html"
      },
    app: {
        baseURL: '/my-salary',
    },
    modules: ['@pinia/nuxt', '@element-plus/nuxt'],
    pinia: {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
    },
    components: [
        {
            path: '~/components',
            extensions: ['.vue'],
        },
    ],
    css: ['assets/global.css'],
    elementPlus: {
        icon: 'ElIcon',
        importStyle: 'scss',
    },
})
