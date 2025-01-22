export default defineNuxtConfig({
    mode: 'static',
    router: {
        base: '/iqvver/',
    },
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    pages: true,
    ssr: true,
    app: {
        baseURL: '/',
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
})
