<script lang="ts" setup>
import LoginForm from '~/components/forms/LoginForm.vue'
import PageFormTemplate from '~/components/templates/PageFormTemplate.vue'
import { useAuthStore } from '~/store/auth'

definePageMeta({ layout: 'default', documentDriven: { page: false } })

const authStore = useAuthStore()
const isLoading = ref(true)
const router = useRouter()

watchEffect(() => {
    if (authStore.authUser.isAuth) {
        router.push('/personal')
    }
    setTimeout(() => {
        authStore.readUser
        isLoading.value = false
    }, 2000)
})

const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
</script>
<template>
    <PageFormTemplate
        title="Войти как"
        subtitle=""
        symbol="&#9993;"
        v-loading="isLoading"
        element-loading-text="Загрузка..."
        :element-loading-spinner="svg"
        element-loading-svg-view-box="-10, -10, 50, 50"
        element-loading-background="rgba(122, 122, 122, 0.8)">
        <LoginForm />
    </PageFormTemplate>
</template>
<style></style>
