<script setup lang="ts">
import dayjs from 'dayjs'
const now = new Date()

definePageMeta({ layout: 'default' })

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

<template></template>

<style scoped lang="scss">
@forward '../assets/scss/global/index.scss';
</style>
