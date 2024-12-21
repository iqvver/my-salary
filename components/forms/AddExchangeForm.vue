<script setup lang="ts">
import type { ExchangeModel } from '~/types'
import { MIN_AMOUNT } from '~/types/const'
import * as nomination from '~/types/const'
import type { FormInstance, FormRules } from 'element-plus'
import * as form from '~/types/exchanges-form'

const { defaultValues, loading } = defineProps<{
    defaultValues: ExchangeModel
    loading: boolean
}>()

const emit = defineEmits<{
    (event: 'submit', payload: ExchangeModel): void
}>()

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<form.ExchangeModel>({ ...defaultValues })
const rules = reactive<FormRules<form.ExchangeModel>>(form.rules)

const submitForm = () => {
    if (!ruleFormRef.value) return
    emit('submit', ruleForm)
}
</script>
<template>
    <el-form
        class="form"
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        :label-position="'top'"
        @submit.prevent="submitForm">
        <el-form-item label="Название">
            <el-select class="form__item" v-model="ruleForm.title" placeholder="Выберите профиль">
                <el-option
                    v-for="item in nomination.nomination"
                    :index="item.nom"
                    :label="item.title"
                    :value="item.nom" />
            </el-select>
        </el-form-item>
        <el-form-item label="Количество">
            <el-input-number
                class="form__item"
                v-model="ruleForm.amount"
                placeholder="Укажите количество"
                :min="MIN_AMOUNT"
                clearable>
                <template #suffix>
                    <span>ШТ</span>
                </template>
            </el-input-number>
        </el-form-item>
        <el-form-item class="form__item" label="Дата">
            <el-date-picker
                class="form__item"
                v-model="ruleForm.fullDate"
                type="date"
                placeholder="Выберите дату"
                clearable />
        </el-form-item>
        <el-form-item>
            <el-button class="form__item" type="primary" native-type="submit">
                {{ loading ? 'Сохранение ...' : 'Сохранить' }}
            </el-button>
        </el-form-item>
    </el-form>
</template>
<style scoped lang="scss">
.form {
    padding-left: 10px;
    width: 300px;

    &__item {
        width: 100%;
    }
}
</style>
