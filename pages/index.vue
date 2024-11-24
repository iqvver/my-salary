<script setup lang="ts">
import { useExchangesStore } from '~/store/catalog-exchange'
import { useMonthCatalogStore } from '~/store/catalog-month'

const exchangesList = useExchangesStore()
const monthList = useMonthCatalogStore()

const router = useRouter()
const route = useRoute()

definePageMeta({ layout: 'default' })

watchEffect(() => {
    exchangesList.filterExchange(monthList.selectedNumMonth), exchangesList.addExchanges, exchangesList.readExchanges
})

onMounted(() => {
    if (route.path === '/') {
        router.push(monthList.month.at(-1)?.num + '')
    }
})
</script>

<template>Выберите месяц</template>

<style scoped lang="scss">
@forward '../assets/scss/global/index.scss';
</style>
