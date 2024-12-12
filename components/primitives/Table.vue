<script setup lang="ts">
import type { ExchangeModel } from '~/types'
import { useExchangesStore } from '~/store/catalog-exchange'
import { useMonthCatalogStore } from '~/store/catalog-month'
import { Delete, Edit } from '@element-plus/icons-vue'
import dayjs from 'dayjs'
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()
const exchangesStore = useExchangesStore()
const monthStore = useMonthCatalogStore()
const myDate = ref(Date.now())
let isOpen = ref(false)

watchEffect(() => {
    exchangesStore.filterExchange(monthStore.selectedMonth, authStore.authUserId),
        exchangesStore.addExchanges,
        exchangesStore.readExchanges
})

const template2: ExchangeModel = {
    id: 100,
    date: dayjs(myDate.value).format('YYYY-MM-DD'),
    fromUserId: authStore.authUserId,
    monthId: 9,
    monthTranscription: monthStore.selectedMonth,
    title: 103005,
    amount: 11111,
    sum: 3588887,
}

const openModal = () => {
    isOpen.value = true
}
</script>
<template>
    <modals-add-exchage :isOpen="isOpen" @update:isOpen="(v) => (isOpen = v)" />
    <el-table
        :data="exchangesStore.filterExchanges"
        height="75vh"
        :default-sort="{ prop: 'date', order: 'descending' }">
        <el-table-column prop="id" label="Смена №" width="120" sortable />
        <el-table-column prop="date" label="Дата" width="180" sortable />
        <el-table-column prop="name" sortable label="Название" width="150" />
        <el-table-column prop="amount" sortable label="Кол-во" width="120" />
        <el-table-column prop="sum" label="Сумма" sortable width="120" />
        <el-table-column width="100">
            <template #default="scope">
                <el-button
                    size="default"
                    type="primary"
                    :icon="Edit"
                    circle
                    @click="exchangesStore.updateExchange(scope.row, template2)" />
                <el-button
                    size="default"
                    type="danger"
                    :icon="Delete"
                    circle
                    @click="exchangesStore.deleteExchange(scope.row)" />
            </template>
        </el-table-column>
    </el-table>
    <el-button style="width: 100%" @click="openModal"> Добавить смену </el-button>
</template>
<style scoped lang="scss"></style>
