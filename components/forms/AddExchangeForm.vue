<script setup lang="ts">
import type { ExchangeModel } from '~/types'
import { MIN_AMOUNT } from '~/types/const'
import * as nomination from '~/types/const'

const { exchangeForm, loading, onSubmitForm } = defineProps<{
    exchangeForm: ExchangeModel
    loading: boolean
    onSubmitForm: () => void
}>()
</script>
<template>
    <el-form class="form" :model="exchangeForm" :label-position="'top'" @submit.prevent="onSubmitForm">
        <el-form-item label="Название">
            <el-select class="form__item" v-model="exchangeForm.title" placeholder="Выберите профиль">
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
                v-model="exchangeForm.amount"
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
                v-model="exchangeForm.fullDate"
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
