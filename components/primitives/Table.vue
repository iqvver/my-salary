<script setup lang="ts">
import type { ExchangeModel } from '~/types'
import dayjs from 'dayjs'

const { exchangesList } = defineProps<{
    exchangesList: any
}>()

const myDate = ref()

onMounted(() => {
    myDate.value = Date.now()
})

const template: ExchangeModel = {
    id: 1,
    date: dayjs(myDate.value).format('YYYY-MM-DD'),
    monthId: 8,
    designation: 'Рrrereама',
    amount: 11,
    sum: 357,
}

</script>
<template>
    <el-table :data="exchangesList.filterExchanges" height="75vh" :default-sort="{ prop: 'date', order: 'descending' }">
        <el-table-column prop="id" label="id" width="100" sortable />
        <el-table-column prop="date" label="Дата" width="180" sortable />
        <el-table-column prop="designation" sortable label="Название" width="150" />
        <el-table-column prop="amount" sortable label="Кол-во" width="120" />
        <el-table-column prop="sum" label="Сумма" sortable width="120" />
        <el-table-column fixed="right" label="" min-width="120">
            <template #default="scope">
                <el-button size="small" type="danger"> Delete </el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-button style="width: 100%" @click="exchangesList.addExchanges(template)"> Add Item </el-button>
</template>
<style scoped lang="scss"></style>
