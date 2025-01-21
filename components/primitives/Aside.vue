<script setup lang="ts">
import { Calendar, Plus, Expand, DArrowLeft, Edit, Delete, DArrowRight } from '@element-plus/icons-vue'
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
    monthStore.filterMonth(authStore.authUser.id)
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
    <el-aside class="aside" :class="{ open: menuIsOpen }">
        <el-scrollbar>
            <el-button @click="showAddMenu" class="aside__button" size="default" type="success" :icon="Plus">
                {{ `${!menuIsOpen ? 'Добавить месяц' : ''}` }}</el-button
            >
            <el-menu :default-active="monthStore.filteringMonth.at(-1)?.id">
                <el-button
                    size="default"
                    :class="{ open: menuIsOpen }"
                    type="warning"
                    :icon="!menuIsOpen ? DArrowRight : DArrowLeft"
                    @click="showMenu" />
                <PrimitivesWarning v-if="!monthStore.filteringMonth.length" class="aside__arrow-button"
                    >Вы не добавили ни одного месяца.<br />Что бы добавить, нажмите "Добавить месяц"!</PrimitivesWarning
                >
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
                        {{ month.title.substring(0, 3) }}
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

    &__arrow-button {
        margin: 3px;
    }

    &__button {
        width: 100%;
        margin-bottom: 10px;
    }
}
</style>
