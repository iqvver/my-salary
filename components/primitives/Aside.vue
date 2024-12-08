<script setup lang="ts">
import { Calendar, Plus, Expand, DArrowLeft } from '@element-plus/icons-vue'
import type { MonthModel } from '~/types'
import { useMonthCatalogStore } from '~/store/catalog-month'
import { useAuthStore } from '~/store/auth'

const monthStore = useMonthCatalogStore()
const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const active: any = ref(monthStore.selectedMonth)
const menuIsOpen = ref(false)

watchEffect(() => {
    monthStore.readMonth
    monthStore.filterMonth(authStore.authUserId)
    monthStore.selectedMonth = route.path.replace('/', '')
})

onMounted(() => {
    active.value = monthStore.month.find(
        (item: { transcriptionInMonth: string }) => item.transcriptionInMonth === monthStore.selectedMonth
    )
})

const template: MonthModel = {
    id: '3',
    title: 'rrrr',
    transcriptionInMonth: 'september',
    numInMonth: 10,
    fromUserId: 1,
}

const selectMonth = (month: MonthModel) => {
    router.push(`${month.transcriptionInMonth}`)
    monthStore.selectedMonth = month.transcriptionInMonth
}
</script>
<template>
    <el-header class="aside__header">
        <el-button
            @click="monthStore.createMonth(template)"
            class="button__add"
            type="success"
            :icon="Plus"
            size="large">
            Добавить месяц</el-button
        >
    </el-header>
    <el-aside class="aside" :class="{ open: menuIsOpen }">
        <el-scrollbar>
            <el-menu :default-active="active.id || monthStore.month.at(-1)?.id">
                <el-button
                    class="menu__item__icon_arrow"
                    :class="{ open: menuIsOpen }"
                    type="warning"
                    circle
                    :icon="DArrowLeft"
                    @click="menuIsOpen = !menuIsOpen" />
                <el-menu-item class="menu__item" v-for="month in monthStore.filteringMonth" :index="month.id">
                    <template #title>
                        <NuxtLink class="menu__item__link" :class="{ open: menuIsOpen }" @click="selectMonth(month)">
                            <el-icon><Calendar /></el-icon>{{ month.title }}
                        </NuxtLink>
                    </template>
                    <el-dropdown>
                        <el-icon>
                            <Expand />
                        </el-icon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item disabled>Редактировать</el-dropdown-item>
                                <el-dropdown-item @click="monthStore.deleteMonth(month)">Удалить</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </el-menu-item>
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>
<style scoped lang="scss">
@keyframes icon-rotate {
    100% {
        rotate: 360deg;
    }
}
@keyframes icon-in-rotate {
    100% {
        rotate: -540deg;
    }
}

@keyframes hide {
    100% {
        opacity: 0;
        display: none;
    }
}

.menu__item {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 10px;

    &__link {
        width: 100%;
        &.open {
            animation: hide 0.5s forwards;
        }
    }

    &__icon {
        &_arrow {
            animation: icon-in-rotate 1s forwards;
            &.open {
                animation: icon-rotate 1s forwards;
            }
        }
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
    z-index: 5;
    height: 75vh;
    height: calc(75vh + 55px);
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    transition: 1s;

    &.open {
        width: 55px;
    }

    &__header {
        position: fixed;
        top: 0;
        width: 250px;
        display: flex;
        align-items: center;
        padding: 0;

        & button {
            margin-right: 10px;
            width: 100%;
        }
    }
}
</style>
