<script setup lang="ts">
import { Calendar, Plus, Delete } from '@element-plus/icons-vue'
import type { MonthModel } from '~/types'

const { monthList } = defineProps<{
    monthList: any
}>()

watchEffect(() => {
    monthList.readMonth
})

const router = useRouter()

const template: MonthModel = {
    id: 3,
    title: 'rrrr',
    num: 88,
}

const selectMonth = (month: number) => {
    router.push(`${month}`)
    monthList.selectedNumMonth = month
}
</script>
<template>
    <el-aside class="aside">
        <el-scrollbar>
            <el-header class="aside__header">
                <el-button
                    @click="monthList.createMonth(template)"
                    class="button__add"
                    type="success"
                    :icon="Plus"
                    size="large" />
            </el-header>
            <el-menu default-active="1">
                <el-menu-item class="menu__item" v-for="month in monthList.month" :index="month.id?.toString()">
                    <template #title>
                        <NuxtLink @click="selectMonth(month.num)">
                            <el-icon><Calendar /></el-icon>{{ month.title }}
                        </NuxtLink>
                    </template>
                    <el-icon size="15" class="menu__item__icon_del" @click="monthList.deleteMonth(2)"
                        ><Delete
                    /></el-icon>
                </el-menu-item>
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>
<style scoped lang="scss">
.menu__item {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;

    &__icon {
        &_del {
            &:hover {
                color: #000;
                opacity: 0.5;
            }
        }
    }
}
.aside {
    width: 250px;
    height: 75vh;
    height: calc(75vh + 55px);
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
</style>
