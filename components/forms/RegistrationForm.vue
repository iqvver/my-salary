﻿<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'
import { User } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import * as form from '~/types/login-form'
import { options } from '~/types/types'

const isLoading = ref(false)
const authStore = useAuthStore()
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<form.UserModel>({
    ...form.initialValues,
})
const rules = reactive<FormRules<form.UserModel>>(form.rules)
const submitForm = async () => {
    isLoading.value = true
    authStore.registration(ruleForm)
    ruleForm.loginName = ''
    ruleForm.loginJob = ''
    isLoading.value = false
}
</script>
<template>
    <el-form
        @submit.prevent="submitForm"
        :label-position="'top'"
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="login-form"
        size="default"
        status-icon>
        <el-form-item label="" prop="loginName" :type="'email'">
            <el-input v-model="ruleForm.loginName" placeholder="Васёк" :prefix-icon="User" />
        </el-form-item>
        <el-form-item>
            <el-select v-model="ruleForm.loginJob" placeholder="Оператор" prop="loginJob">
                <el-option v-for="item in options" :key="item.title" :label="item.title" :value="item.title" />
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button :loading="isLoading" type="primary" native-type="submit"> Зарегистрироваться </el-button>
        </el-form-item>
    </el-form>
    <NuxtLink to="/login"> Войти </NuxtLink>
</template>
<style lang="css">
.el-form-item__content {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>
<style lang="scss" scoped>
.login-form {
    margin-top: 32px;
    &__item {
        display: flex;
        justify-content: space-between;
        width: 50%;
        margin: 0 auto;
        margin-bottom: 10px;
    }

    &__footer {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
}
</style>
