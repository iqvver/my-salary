<script setup lang="ts">
import { useMonthCatalogStore } from '~/store/catalog-month'

const monthList = useMonthCatalogStore()
const { tableData, deleteRow, onAddItem } = defineProps<{
    tableData: any
    deleteRow: any
    onAddItem: any
}>()

const resultTable = tableData.filter((item: { monthId: number }) => item.monthId === monthList.selectedNumMonth)
</script>
<template>
    <el-table
        v-loading="!tableData"
        :data="resultTable"
        height="75vh"
        :default-sort="{ prop: 'date', order: 'descending' }">
        <el-table-column prop="id" label="id" width="100" sortable />
        <el-table-column prop="date" label="Дата" width="180" sortable />
        <el-table-column prop="designation" sortable label="Название" width="150" />
        <el-table-column prop="amount" sortable label="Кол-во" width="120" />
        <el-table-column prop="sum" label="Сумма" sortable width="120" />
        <el-table-column fixed="right" label="" min-width="120">
            <template #default="scope">
                <el-button size="small" type="danger" @click="deleteRow(scope.$index)"> Delete </el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-button style="width: 100%" @click="onAddItem"> Add Item </el-button>
</template>
<style scoped lang="scss"></style>
