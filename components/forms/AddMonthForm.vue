<script setup lang="ts">
import { MONTH_MASK } from '~/types/const'
import type { MonthPreviewModel } from '~/types/models/MonthModel';

const { monthForm, loading, onSubmitForm } = defineProps<{
    monthForm: MonthPreviewModel
    loading: boolean
    onSubmitForm: () => void
}>()
</script>
<template>
    <el-form class="form" :model="monthForm" :label-position="'top'" @submit.prevent="onSubmitForm">
        <el-form-item class="form__item" label="Выберите месяц">
            <el-date-picker
                class="form__item"
                v-model="monthForm.date"
                type="month"
                :format="MONTH_MASK"
                :editable="false"
                placeholder="Выберите дату"
                clearable />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" native-type="submit">
                {{ loading ? 'Добавление ...' : 'Добавить' }}
            </el-button>
        </el-form-item>
    </el-form>
</template>
<style scoped lang="scss"></style>
