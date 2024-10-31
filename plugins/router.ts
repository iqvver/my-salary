import { createPinia } from 'pinia'

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.$nuxt.$router.beforeEach((to, from) => {
        //do something to validate
    })
})
