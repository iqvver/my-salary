export default defineNuxtConfig({
    mode: 'static',
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    pages: true,
    ssr: true,
    app: {
        baseURL: '/my-salary',
    },
    publicPath: '',
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
