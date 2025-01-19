<script setup lang="ts">
import type { ExchangeModel } from '~/types'
import { useExchangesStore } from '~/store/catalog-exchange'
import { useMonthCatalogStore } from '~/store/catalog-month'
import { useAuthStore } from '~/store/auth'
import ExchangeCard from '../cards/ExchangeCard.vue'

const authStore = useAuthStore()
const exchangesStore = useExchangesStore()
const monthStore = useMonthCatalogStore()
const router = useRouter()
let isOpen = ref(false)
let isEditOpen = ref(false)

watchEffect(() => {
    exchangesStore.filterExchange(monthStore.selectedMonth, authStore.authUserId),
        exchangesStore.addExchanges,
        exchangesStore.readExchanges,
        exchangesStore.getTotalSummary
})

let exchangeEditForm: ExchangeModel = {
    id: NaN,
    fromUserId: NaN,
    date: '',
    fullDate: '',
    monthTranscription: '',
    title: NaN,
    amount: NaN,
    sum: NaN,
}

const openAddForm = () => {
    isOpen.value = true
}

const openEditForm = (template: ExchangeModel) => {
    isEditOpen.value = true
    isOpen.value = true
    exchangeEditForm = { ...template }
}

const exchangeDelete = (template: ExchangeModel) => {
    exchangesStore.deleteExchange(template)
}

watchEffect(() => {
    if (!isOpen.value) isEditOpen.value = false
})

watchEffect(() => {
    if (!authStore.isAuth) {
        router.push('/login')
    }
})
</script>
<template>
    <modals-add-exchange
        :isOpen="isOpen"
        :exchangeEditForm="exchangeEditForm"
        :isEdit="isEditOpen"
        @update:isOpen="(v: boolean) => (isOpen = v)" />
    <h4>Сумма за месяц: {{ exchangesStore.totalSummary }} рублей</h4>
    <div class="wrapper-card">
        <ExchangeCard
            v-for="(card, index) in exchangesStore.filterExchanges"
            :card="card"
            :index="index"
            @delete="exchangeDelete"
            @edit="openEditForm" />
    </div>
    <PrimitivesNoContentWarning v-if="!exchangesStore.filterExchanges.length" />
    <el-button style="width: 100%" @click="openAddForm"> Добавить смену </el-button>
</template>
<style scoped lang="scss">
.wrapper-card {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
</style>
