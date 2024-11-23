<script setup lang="ts">
import { useExchangesStore } from '~/store/catalog-exchange'
import { useMonthCatalogStore } from '~/store/catalog-month'

const exchangesList = useExchangesStore()
const monthList = useMonthCatalogStore()

definePageMeta({ layout: 'default' })

watchEffect(() => {
    exchangesList.filterExchange(monthList.selectedNumMonth), 
    exchangesList.addExchanges,
    exchangesList.readExchanges
})

</script>
<template>
    <primitives-table :exchangesList="exchangesList" />
</template>
<style scoped lang="scss"></style>
