<script setup lang="ts">
import type { ExchangeModel } from '~/types'
import { nomination, MIN_AMOUNT } from '~/types/const'
import type { FormInstance, FormRules } from 'element-plus'
import { List, Calendar, Coin } from '@element-plus/icons-vue'
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

const step = ref(0)

const submitForm = () => {
    if (!ruleFormRef.value) return
    emit('submit', ruleForm)
}

watchEffect(() => {
    if (ruleForm.title) {
        step.value = 1
    }
    if (ruleForm.title && ruleForm.amount) {
        step.value = 2
    }
    if (ruleForm.title && ruleForm.amount && ruleForm.fullDate) {
        step.value = 3
    }
})
</script>
<template>
    <el-form
        class="form"
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        :label-position="'top'"
        @submit.prevent="submitForm">
        <el-form-item label="Название" prop="title">
            <el-select class="form__item" v-model="ruleForm.title" placeholder="Выберите профиль" clearable>
                <el-option v-for="item in nomination" :index="item.nom" :label="item.title" :value="item.nom" />
            </el-select>
        </el-form-item>
        <el-form-item label="Количество" prop="amount">
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
        <el-form-item class="form__item" label="Дата" prop="fullDate">
            <el-date-picker
                class="form__item"
                v-model="ruleForm.fullDate"
                type="date"
                placeholder="Выберите дату"
                clearable />
        </el-form-item>
        <el-form-item class="form__item">
            <el-steps class="form__item" :active="step" finish-status="success" direction="horizontal">
                <el-step title="Вид профиля" :icon="List" />
                <el-step title="Количество профиля" :icon="Coin" />
                <el-step title="Дата" :icon="Calendar" />
            </el-steps>
        </el-form-item>
        <el-form-item>
            <el-button :disabled="step < 3" class="form__item" type="primary" native-type="submit">
                {{ loading ? 'Сохранение ...' : 'Сохранить' }}
            </el-button>
        </el-form-item>
    </el-form>
</template>
<style scoped lang="scss">
.form {
    &__item {
        width: 500px;

        @media (max-width: 660px) {
            width: 100%;
        }
    }
}
</style>
