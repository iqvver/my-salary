<script setup lang="ts">
import type { ExchangeModel } from '~/types'
import { MIN_AMOUNT, MONTH_MASK } from '~/types/const'
import * as nomination from '~/types/const'
import type { FormInstance, FormRules } from 'element-plus'
import { List, Calendar, Coin } from '@element-plus/icons-vue'
import * as form from '~/types/exchanges-form'
import dayjs from 'dayjs'

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

//TODO: сделать что-бы вставлялся выбранный месяц
</script>
<template>
    <div class="container">
        <el-form
            class="form"
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            :label-position="'top'"
            @submit.prevent="submitForm">
            <el-form-item label="Название" prop="title">
                <el-select class="form__item" v-model="ruleForm.title" placeholder="Выберите профиль" clearable>
                    <el-option
                        v-for="item in nomination.nomination"
                        :index="item.nom"
                        :label="item.title"
                        :value="item.nom" />
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
            <el-form-item>
                <el-button class="form__item" type="primary" native-type="submit">
                    {{ loading ? 'Сохранение ...' : 'Сохранить' }}
                </el-button>
            </el-form-item>
        </el-form>

        <el-steps class="step" :active="step" finish-status="success" direction="vertical">
            <el-step title="Вид профиля" :icon="List" />
            <el-step title="Количество профиля" :icon="Coin" />
            <el-step title="Дата" :icon="Calendar" />
        </el-steps>
    </div>
</template>
<style scoped lang="scss">
.container {
    display: flex;
    gap: 100px;
}
.step {
    max-width: 500px;
    height: 280px;
}
.form {
    padding-left: 10px;
    width: 300px;

    &__item {
        width: 100%;
    }
}
</style>
