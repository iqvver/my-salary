<script setup lang="ts">
import { useExchangesStore } from '~/store/catalog-exchange'
import { useMonthCatalogStore } from '~/store/catalog-month'
import type { ExchangeModel } from '~/types'
import dayjs from 'dayjs'
const now = new Date()

const exchangesList = useExchangesStore()
const monthList = useMonthCatalogStore()

definePageMeta({ layout: 'default' })

const resultTable = exchangesList.exchanges?.filter(
    (item: { monthId: number }) => item.monthId === monthList.selectedNumMonth
)

watchEffect(() => {
    console.log('click2')
    exchangesList.readExchanges
    const arr = [...resultTable]
    console.log(arr)

})
</script>
<template>
    <primitives-table :addExchange="exchangesList.addExchanges" :resultTable="resultTable" />
</template>
<style scoped lang="scss"></style>
