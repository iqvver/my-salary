<script setup lang="ts">
import type { ExchangeModel } from '~/types'

const {} = defineProps<{}>()

definePageMeta({ layout: 'default' })
const tableData: ExchangeModel[] = [
    {
        id: 1,
        date: '2016-08-01',
        monthId: 8,
        designation: 'bРама',
        amount: 11,
        sum: 37,
    },
    {
        id: 25,
        date: '2016-09-02',
        monthId: 9,
        designation: 'Рама',
        amount: 11,
        sum: 57,
    },
    {
        id: 5,
        date: '2016-08-01',
        monthId: 8,
        designation: 'aРама',
        amount: 11,
        sum: 7,
    },
]
const deleteRow = (index: number) => {
    alert('Удалить')
}

const onAddItem = () => {
    //now.setDate(now.getDate() + 1)
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
    <primitives-table :tableData="tableData" :deleteRow="deleteRow" :onAddItem="onAddItem" />
</template>
<style scoped lang="scss"></style>
