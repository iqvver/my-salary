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

onMounted(() => {
    if (route.path === '/') {
        router.push(monthStore.filteringMonth.at(-1)?.transcriptionInMonth + '')
    }
    exchangesStore.filterExchange(monthStore.selectedMonth, authStore.authUserId),
        exchangesStore.addExchanges,
        exchangesStore.readExchanges
})
</script>

<template>Выберите месяц</template>

<style scoped lang="scss">
@forward '../assets/scss/global/index.scss';
</style>
