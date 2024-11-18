<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { Menu as IconMenu, Message, Setting, Plus } from '@element-plus/icons-vue'
import { useMonthCatalogStore } from '~/store/catalog-month'
import type { MonthModel, ExchangeModel } from '~/types'
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

const template: MonthModel = {
    id: 3,
    title: 'rrrr',
    num: 88,
}

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
    <el-container class="menu__container">
        <el-aside class="menu__aside">
            <el-scrollbar>
                <el-header class="menu__aside__header"
                    ><el-button
                        @click="monthList.createMonth(template)"
                        class="button__add"
                        type="success"
                        :icon="Plus"
                        size="large"
                /></el-header>
                <el-menu :default-openeds="['']" class="menu__item">
                    <el-menu-item v-for="month in monthList.month" :index="month.id?.toString()">
                        <template #title>
                            <el-icon><message /></el-icon>{{ month.title }}
                        </template>
                    </el-menu-item>
                </el-menu>
            </el-scrollbar>
        </el-aside>

        <el-container>
            <el-header class="menu__header">
                <div class="menu__header__wrapper">
                    <el-dropdown>
                        <el-icon>
                            <setting />
                        </el-icon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>Выйти</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <span>{{ auth.name }}</span>
                </div>
            </el-header>

            <el-main>
                <el-table :data="tableData" height="75vh" :default-sort="{ prop: 'date', order: 'descending' }">
                    <el-table-column prop="id" label="id" width="140" sortable />
                    <el-table-column prop="date" label="Дата" width="140" sortable />
                    <el-table-column prop="designation" sortable label="Название" width="120" />
                    <el-table-column prop="amount" sortable label="Кол-во" width="120" />
                    <el-table-column prop="sum" label="Сумма" sortable width="120" />
                    <el-table-column fixed="right" label="" min-width="120">
                        <template #default="scope">
                            <el-button size="small" type="danger" @click="deleteRow(scope.$index)"> Delete </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-button style="width: 100%" @click="onAddItem"> Add Item </el-button>
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped lang="scss">
@forward '../assets/scss/global/index.scss';
.menu {
    &__container {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
    }

    &__aside {
        width: 200px;
        min-height: 250px;
        max-height: 500px;
        -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

        &__header {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 9;
            display: flex;
            align-items: center;
            background-color: #fff;
            border-bottom: 1px dashed #aeaeae;
        }
    }

    &__item {
    }

    &__header {
        display: flex;
        align-items: center;
        -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

        &__wrapper {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
}
</style>
