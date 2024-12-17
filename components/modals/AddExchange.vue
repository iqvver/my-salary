<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { useExchangesStore } from '~/store/catalog-exchange'
import type { ExchangeModel } from '~/types'
import AddExchangeForm from '../forms/AddExchangeForm.vue'

const { exchangeEditForm, isOpen, isEdit } = defineProps<{
    exchangeEditForm: ExchangeModel
    isEdit: boolean
    isOpen: boolean
}>()
const emit = defineEmits<{
    (event: 'update:isOpen', payload: boolean): void
}>()

const open = ref(isOpen)
const loading = ref(false)
const authStore = useAuthStore()
const exchangesStore = useExchangesStore()

watch(
    () => open.value,
    (cur) => emit('update:isOpen', cur)
)
watch(
    () => isOpen,
    (cur) => (open.value = cur)
)

//TODO: сделать что-бы дата вставлялась из активного месяца
let exchangeForm: ExchangeModel = reactive({
    title: '',
    fromUserId: authStore.authUserId,
    date: '',
    fullDate: '',
    amount: 1,
})

//TODO: в форме визуально на меняются данные хотя все работает и внутри все норм
watchEffect(() => {
    isEdit
        ? (exchangeForm = exchangeEditForm)
        : (exchangeForm = { title: '', fromUserId: authStore.authUserId, date: '', amount: 1,  fullDate: '' })
})

const submitForm = () => {
    loading.value = true
    isEdit ? exchangesStore.updateExchange(exchangeForm) :
    exchangesStore.addExchanges(exchangeForm)
    setTimeout(() => {
        loading.value = false
        open.value = false
    }, 400)
}
</script>
<template>
    <el-drawer
        v-model="open"
        @closed="open = false"
        :destroy-on-close="true"
        :title="`${isEdit ? 'Редактирование' : 'Добавление'} смены!`"
        direction="ttb"
        size="85%">
        <AddExchangeForm :exchangeForm="exchangeForm" :loading="loading" :onSubmitForm="submitForm" />
        <el-button @click="$emit('update:isOpen', false)">Отмена</el-button>
    </el-drawer>
</template>

<style scoped lang="scss"></style>
