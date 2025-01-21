<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { useExchangesStore } from '~/store/catalog-exchange'
import { useMonthCatalogStore } from '~/store/catalog-month'

const authStore = useAuthStore()
const exchangesStore = useExchangesStore()
const monthStore = useMonthCatalogStore()

const router = useRouter()
const route = useRoute()

definePageMeta({ layout: 'table' })

//TODO: вот тут можно попробовать организовать роуты
onMounted(() => {
    if (route.path === '/') {
        router.push('/login')
    }
    exchangesStore.filterExchange(monthStore.selectedMonth, authStore.authUser.id),
        exchangesStore.addExchanges,
        exchangesStore.readExchanges
})
</script>

<template>Выберите месяц</template>

<style scoped lang="scss">
@forward '../assets/scss/global/index.scss';
</style>
