<script setup lang="ts">
import { Message, Plus } from '@element-plus/icons-vue'
import type { MonthModel } from '~/types'

const { monthList } = defineProps<{
    monthList: any
}>()

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
    {{ monthList.selectedNumMonth }}
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
            <el-menu :default-openeds="['']" class="menu__item">
                <el-menu-item v-for="month in monthList.month" :index="month.id?.toString()">
                    <template #title>
                        <NuxtLink @click="selectMonth(month.num)">
                            <el-icon><message /></el-icon>{{ month.title }}
                        </NuxtLink>
                    </template>
                </el-menu-item>
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>
<style scoped lang="scss">
.aside {
    width: 200px;
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
