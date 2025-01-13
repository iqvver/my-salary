<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { useExchangesStore } from '~/store/catalog-exchange'
import type { ExchangeModel } from '~/types'
import AddExchangeForm from '../forms/AddExchangeForm.vue'
import * as form from '~/types/exchanges-form'


const { exchangeEditForm, isOpen, isEdit } = defineProps<{
    exchangeEditForm: ExchangeModel
    isEdit: boolean
    isOpen: boolean
}>()
const emit = defineEmits<{
    (event: 'update:isOpen', payload: boolean): void
}>()

const exchangesStore = useExchangesStore()
const open = ref(isOpen)
const loading = ref(false)
const authStore = useAuthStore()
const ruleForm = reactive<form.ExchangePayloadModel>({
    ...form.initialValues,
    fromUserId: authStore.authUserId,
})

watch(
    () => open.value,
    (cur) => emit('update:isOpen', cur)
)
watch(
    () => isOpen,
    (cur) => (open.value = cur)
)
let defaultValues = reactive<form.ExchangePayloadModel>({
    title: '',
    fromUserId: authStore.authUserId,
    fullDate: new Date(),
    amount: NaN,
})
watchEffect(() => {
    isEdit ? (defaultValues = exchangeEditForm) : (defaultValues = ruleForm)
})
const submitForm = (ruleForm: ExchangeModel) => {
    loading.value = true
    isEdit ? exchangesStore.updateExchange(ruleForm) : exchangesStore.addExchanges(ruleForm)
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
        <AddExchangeForm :defaultValues="defaultValues" :loading="loading" @submit="submitForm" />
        <el-button @click="$emit('update:isOpen', false)">Отмена</el-button>
    </el-drawer>
</template>

<style scoped lang="scss"></style>
