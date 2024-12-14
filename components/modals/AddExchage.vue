<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { useExchangesStore } from '~/store/catalog-exchange'
import type { ExchangeModel } from '~/types'

const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits<{
    (event: 'update:isOpen', payload: boolean): void
}>()
const open = ref(props.isOpen)
const loading = ref(false)
const authStore = useAuthStore()
const exchangesStore = useExchangesStore()

watch(
    () => open.value,
    (cur) => emit('update:isOpen', cur)
)
watch(
    () => props.isOpen,
    (cur) => (open.value = cur)
)

const exchangeForm: ExchangeModel = reactive({
    title: '',
    fromUserId: authStore.authUserId,
    date: '' as unknown as Date,
    amount: 1,
})

const submitForm = () => {
    loading.value = true
    exchangesStore.addExchanges(exchangeForm)
    setTimeout(() => {
        loading.value = false
    }, 400)
}
</script>
<template>
    <el-drawer
        v-model="open"
        @closed="open = false"
        :destroy-on-close="true"
        title="Вы хотите добавить смену в выбранный месяц?"
        direction="ttb"
        size="85%">
        <FormsExchangeForm :exchangeForm="exchangeForm" :loading="loading" :onSubmitForm="submitForm" />
        <el-button @click="$emit('update:isOpen', false)">Отмена</el-button>
    </el-drawer>
</template>

<style scoped lang="scss"></style>
