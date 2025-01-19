<script setup lang="ts">
import { Calendar, Plus, Expand, DArrowLeft, Edit, Delete, View } from '@element-plus/icons-vue'
import type { MonthModel } from '~/types'
import { useMonthCatalogStore } from '~/store/catalog-month'
import { useAuthStore } from '~/store/auth'
import AddMonth from '../modals/AddMonth.vue'

const monthStore = useMonthCatalogStore()
const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const active: any = ref('')
const menuIsOpen = ref(false)
const menuAddIsOpen = ref(false)

watchEffect(() => {
    monthStore.readMonth
    monthStore.filterMonth(authStore.authUserId)
    monthStore.selectedMonth = route.path.replace('/', '')
})

onMounted(() => {
    active.value = monthStore.month.find(
        (item: { transcriptionInMonth?: string }) => item.transcriptionInMonth === monthStore.selectedMonth
    )
})

const selectMonth = (month: MonthModel) => {
    router.push(`${month.transcriptionInMonth}`)
    monthStore.selectedMonth = month.transcriptionInMonth!
    active.value = month.id?.toString()
}
const showAddMenu = () => {
    menuAddIsOpen.value = !menuAddIsOpen.value
    if (menuAddIsOpen.value) menuIsOpen.value = false
}
const showMenu = () => {
    menuIsOpen.value = !menuIsOpen.value
    if (menuIsOpen.value) menuAddIsOpen.value = false
}
</script>
<template>
    <el-header class="aside__header">
        <el-button @click="showAddMenu" class="button__add" type="success" :icon="Plus"> Добавить месяц</el-button>
    </el-header>
    <el-aside class="aside" :class="{ open: menuIsOpen }">
        <el-scrollbar>
            <el-menu :default-active="monthStore.filteringMonth.at(-1)?.id">
                <el-button
                    class="menu__item__icon_arrow"
                    :class="{ open: menuIsOpen }"
                    type="warning"
                    circle
                    :icon="DArrowLeft"
                    @click="showMenu" />
                <el-menu-item
                    v-if="!menuAddIsOpen"
                    class="menu__item"
                    v-for="month in monthStore.filteringMonth"
                    :key="month.id!"
                    :index="month.id">
                    <template #title>
                        <NuxtLink class="menu__item__link" :class="{ open: menuIsOpen }" @click="selectMonth(month)">
                            <el-icon><Calendar /></el-icon>{{ month.title }}
                        </NuxtLink>
                    </template>
                    <el-dropdown v-if="!menuIsOpen">
                        <el-icon>
                            <Expand />
                        </el-icon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item :icon="Edit" disabled>Редактировать</el-dropdown-item>
                                <el-dropdown-item :icon="Delete" @click="monthStore.deleteMonth(month)"
                                    >Удалить</el-dropdown-item
                                >
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <el-icon v-else @click="selectMonth(month)">
                        <View />
                    </el-icon>
                </el-menu-item>
                <el-menu-item class="add-month" v-else>
                    <AddMonth @update:isOpen="(v) => (menuAddIsOpen = v)" />
                </el-menu-item>
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>
<style scoped lang="scss">
.add-month {
    display: flex;
    flex-direction: column;
    height: max-content;
}

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

    @media (max-width: 500px) {
        width: 100%;
    }

    &.open {
        width: 55px;
    }

    &__header {
        position: fixed;
        top: 0;
        width: 250px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0;

        @media (max-width: 440px) {
            top: 50px;
        }

        & button {
            margin-right: 10px;
            width: 100%;
        }
    }
}
</style>
