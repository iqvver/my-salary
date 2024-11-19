<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { useMonthCatalogStore } from '~/store/catalog-month'
import type { ExchangeModel } from '~/types'
import dayjs from 'dayjs'
const auth = useAuthStore()
const now = new Date()
const monthList = useMonthCatalogStore()
definePageMeta({ layout: 'default' })

const tableData: ExchangeModel[] = [
    {
        id: 1,
        date: '2016-04-01',
        monthId: 5,
        designation: 'bРама',
        amount: 11,
        sum: 37,
    },
    {
        id: 25,
        date: '2016-05-02',
        monthId: 5,
        designation: 'Рама',
        amount: 11,
        sum: 57,
    },
    {
        id: 5,
        date: '2016-010-01',
        monthId: 5,
        designation: 'aРама',
        amount: 11,
        sum: 7,
    },
]

watchEffect(() => {
    monthList.readMonth
})

const deleteRow = (index: number) => {
    alert('Удалить')
}

const onAddItem = () => {
    now.setDate(now.getDate() + 1)
    // tableData.value.push({
    //     date: dayjs(now).format('YYYY-MM-DD'),
    //     id: 5,
    //     monthId: 5,
    //     designation: 'aРама',
    //     amount: 11,
    //     sum: 7,
    // })
    alert('Добавить')
}
</script>

<template>
    <primitives-header :name="auth.name" />
    <el-container class="container">
        <primitives-aside :monthList="monthList" />
        <el-main>
            <primitives-table :tableData="tableData" :deleteRow="deleteRow" :onAddItem="onAddItem" />
        </el-main>
    </el-container>
</template>

<style scoped lang="scss">
@forward '../assets/scss/global/index.scss';
.container {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
}
</style>
