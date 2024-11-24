<script setup lang="ts">
import { useExchangesStore } from '~/store/catalog-exchange'
import { useMonthCatalogStore } from '~/store/catalog-month'

const exchangesStore = useExchangesStore()
const monthStore = useMonthCatalogStore()

definePageMeta({ layout: 'default' })

watchEffect(() => {
    exchangesStore.filterExchange(monthStore.selectedMonth), exchangesStore.addExchanges, exchangesStore.readExchanges
})
</script>
<template>
    <primitives-table :exchangesStore="exchangesStore" :monthStore="monthStore" />
</template>
<style scoped lang="scss"></style>
