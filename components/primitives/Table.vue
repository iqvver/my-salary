<script setup lang="ts">
import type { ExchangeModel } from '~/types'
import { useExchangesStore } from '~/store/catalog-exchange'
import { useMonthCatalogStore } from '~/store/catalog-month'
import { Delete, Edit } from '@element-plus/icons-vue'
import type { TableColumnCtx } from 'element-plus'
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()
const exchangesStore = useExchangesStore()
const monthStore = useMonthCatalogStore()
let isOpen = ref(false)
let isEditOpen = ref(false)

watchEffect(() => {
    exchangesStore.filterExchange(monthStore.selectedMonth, authStore.authUserId),
        exchangesStore.addExchanges,
        exchangesStore.readExchanges
})

let exchangeEditForm = {}

const openAddForm = () => {
    isOpen.value = true
}

const openEditForm = (template: ExchangeModel) => {
    isEditOpen.value = true
    isOpen.value = true
    exchangeEditForm = { ...template }
}

watchEffect(() => {
    if (!isOpen.value) isEditOpen.value = false
})

interface SummaryMethodProps<T = ExchangeModel> {
    columns: TableColumnCtx<T>[]
    data: T[]
}

const getSummaries = (param: SummaryMethodProps) => {
    const { columns, data } = param
    const sums: (string | VNode)[] = []
    columns.forEach((column, index) => {
        if (index === 0) {
            sums[index] = h('div', { style: { textDecoration: 'underline' } }, ['Итого'])
            return
        }
        const values = data.map((item: any) => Number(item[column.property]))
        if (!values.every((value) => Number.isNaN(value))) {
            sums[index] = `${values.reduce((prev, curr) => {
                const value = Number(curr)
                if (!Number.isNaN(value)) {
                    return prev + curr
                } else {
                    return prev
                }
            }, 0)} ₽`
        } else {
            sums[index] = ''
        }
    })

    return sums
}
</script>
<template>
    <modals-add-exchange
        :isOpen="isOpen"
        :exchangeEditForm="exchangeEditForm"
        :isEdit="isEditOpen"
        @update:isOpen="(v: boolean) => (isOpen = v)" />
    <el-table
        :data="exchangesStore.filterExchanges"
        height="75vh"
        :summary-method="getSummaries"
        show-summary
        :default-sort="{ prop: 'date', order: 'descending' }">
        <el-table-column prop="id" label="Смена №" width="150" sortable />
        <el-table-column prop="date" label="Дата" sortable />
        <el-table-column prop="name" sortable label="Название" />
        <el-table-column prop="amount" sortable label="Кол-во (ШТ)" />
        <el-table-column prop="sum" label="Сумма (₽)" sortable />
        <el-table-column>
            <template #default="scope">
                <el-button size="default" type="primary" :icon="Edit" circle @click="openEditForm(scope.row)" />
                <el-button
                    size="default"
                    type="danger"
                    :icon="Delete"
                    circle
                    @click="exchangesStore.deleteExchange(scope.row)" />
            </template>
        </el-table-column>
    </el-table>
    <el-button style="width: 100%" @click="openAddForm"> Добавить смену </el-button>
</template>
<style scoped lang="scss"></style>
