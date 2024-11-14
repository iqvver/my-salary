<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting, Plus } from '@element-plus/icons-vue'
import { useMonthCatalogStore } from '~/store/catalog-month'

const auth = useAuthStore()

const monthList = useMonthCatalogStore()

definePageMeta({ layout: 'default' })

const item = {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 10 }).fill(item))
</script>

<template>
    <el-container class="menu__container">
        <el-aside class="menu__aside">
            <el-scrollbar>
                <el-menu :default-openeds="['1', '2']" class="menu__item">
                    <el-sub-menu v-for="month in monthList.month" :index="month.id?.toString()">
                        <template #title>
                            <el-icon><message /></el-icon>{{ month.title }}
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">Смена 1</el-menu-item>
                            <el-menu-item index="1-2">Смена 2</el-menu-item>
                        </el-menu-item-group>
                        <el-button class="button__add_small" type="success" :icon="Plus" />
                    </el-sub-menu>
                </el-menu>
                <el-button @click="monthList.addMonth()" class="button__add" type="success" :icon="Plus" size="large" />
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
                <el-scrollbar>
                    <el-table v-loading="!tableData" :data="tableData">
                        <el-table-column prop="date" label="Дата" width="140" />
                        <el-table-column prop="name" label="Имя" width="120" />
                        <el-table-column prop="address" label="Address" />
                    </el-table>
                </el-scrollbar>
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
        width: 250px;
        min-height: 250px;
        -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    }

    &__item {
        background-color: #a0aecd;
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
