<script lang="ts" setup>
import { useAuthStore } from './store/auth'
import { useMonthCatalogStore } from './store/catalog-month'

const authStore = useAuthStore()
const monthStore = useMonthCatalogStore()
const router = useRouter()

watchEffect(() => {
    if (!authStore.isAuth) {
        router.push('/login')
    } else {
        const path = monthStore.filteringMonth.at(-1)?.transcriptionInMonth
       // router.push(`/${path}`)
    }
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<style lang="scss"></style>
