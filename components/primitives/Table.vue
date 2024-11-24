<script setup lang="ts">
import type { ExchangeModel } from '~/types'
import { Delete, Edit } from '@element-plus/icons-vue'
import dayjs from 'dayjs'

const { exchangesStore } = defineProps<{
    exchangesStore: any
}>()

const myDate = ref()

onMounted(() => {
    myDate.value = Date.now()
})

const template: ExchangeModel = {
    id: '1',
    date: dayjs(myDate.value).format('YYYY-MM-DD'),
    monthId: 8,
    monthTranscription: 'september',
    designation: 'Рrrereама',
    amount: 11,
    sum: 357,
}
</script>
<template>
    <el-table
        :data="exchangesStore.filterExchanges"
        height="75vh"
        :default-sort="{ prop: 'date', order: 'descending' }">
        <el-table-column prop="id" label="Смена №" width="120" sortable />
        <el-table-column prop="date" label="Дата" width="180" sortable />
        <el-table-column prop="designation" sortable label="Название" width="150" />
        <el-table-column prop="amount" sortable label="Кол-во" width="120" />
        <el-table-column prop="sum" label="Сумма" sortable width="120" />
        <el-table-column width="100">
            <template #default="scope">
                <el-button
                    size="default"
                    type="primary"
                    :icon="Edit"
                    circle
                    @click="exchangesStore.deleteExchange(1)" />
                <el-button
                    size="default"
                    type="danger"
                    :icon="Delete"
                    circle
                    @click="exchangesStore.deleteExchange(scope.row)" />
            </template>
        </el-table-column>
    </el-table>
    <el-button style="width: 100%" @click="exchangesStore.addExchanges(template)"> Добавить смену </el-button>
</template>
<style scoped lang="scss"></style>
