<script setup lang="ts">
import { useExchangesStore } from '~/store/catalog-exchange'
import { useMonthCatalogStore } from '~/store/catalog-month'

const exchangesStore = useExchangesStore()
const monthStore = useMonthCatalogStore()

const router = useRouter()
const route = useRoute()

definePageMeta({ layout: 'table' })

watchEffect(() => {
    exchangesStore.filterExchange(monthStore.selectedMonth), exchangesStore.addExchanges, exchangesStore.readExchanges
})

onMounted(() => {
    if (route.path === '/') {
        router.push(monthStore.month.at(-1)?.transcriptionInMonth + '')
    }
})
</script>

<template>Выберите месяц</template>

<style scoped lang="scss">
@forward '../assets/scss/global/index.scss';
</style>
