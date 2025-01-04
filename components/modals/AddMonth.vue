<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { useMonthCatalogStore } from '~/store/catalog-month'
import { MONTH_MASK } from '~/types/const'
import dayjs from 'dayjs'
import type { MonthPreviewModel } from '~/types/models/MonthModel'

const emit = defineEmits<{
    (event: 'update:isOpen', payload: boolean): void
}>()

const active: any = ref('')
const loading = ref(false)
const authStore = useAuthStore()
const monthStore = useMonthCatalogStore()
const router = useRouter()

const monthForm: MonthPreviewModel = reactive({
    id: monthStore.filteringMonth.length.toString(),
    fromUserId: authStore.authUserId,
    date: new Date(),
})

const submitForm = () => {
    loading.value = true
    monthStore.createMonth(monthForm)
    active.value = monthForm.id
    router.push(dayjs(monthForm.date).format(MONTH_MASK))
    setTimeout(() => {
        loading.value = false
        emit('update:isOpen', false)
    }, 400)
}
</script>
<template>
    <div class="container">
        <FormsAddMonthForm :monthForm="monthForm" :loading="loading" :onSubmitForm="submitForm" />
        <el-button class="btn" @click="$emit('update:isOpen', false)">Отмена</el-button>
    </div>
</template>

<style scoped lang="scss">
.container {
    padding: 0 10px;
    width: 100%;
}
.btn {
    width: 100%;
}
</style>
