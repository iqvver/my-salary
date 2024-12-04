<script lang="ts" setup>
import { useAuthStore } from './store/auth'

const authStore = useAuthStore()
const router = useRouter()

watchEffect(() => {
    if (!authStore.isAuth) {
        router.push('/login')
    }
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<style lang="scss"></style>
