<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'
import { Edit, Message } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import * as form from '~/types/login-form'

const isLoading = ref(false)
const authStore = useAuthStore()
const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<form.FormValues>({
    ...form.initialValues,
})
const rules = reactive<FormRules<form.FormValues>>(form.rules)
const submitForm = async (pat: any) => {
    console.log(pat)
    try {
        isLoading.value = true
        // authStore.$state.myName = ruleForm.myName
        // authStore.$state.myJob = ruleForm.myJob
        //router.push(authStore.initialPath ? authStore.initialPath : '/personal')
        //authStore.initialPath = ''
        ElNotification({
            title: 'Вход выполнен',
            type: 'success',
        })
    } catch (error) {
        console.log(error)
        ElNotification({
            title: `${error}`.split(':')[1],
            message: 'Что-то пошло не так',
            type: 'error',
        })
        throw new Error('Registration response error')
    } finally {
        isLoading.value = false
    }
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
            <el-input v-model="ruleForm.loginName" placeholder="Васёк" :prefix-icon="Message" />
        </el-form-item>
        <el-form-item label="" prop="loginJob" :type="'email'">
            <el-input v-model="ruleForm.loginJob" placeholder="Оператор" :prefix-icon="Message" />
        </el-form-item>
        <el-form-item>
            <el-button :loading="isLoading" type="primary" native-type="submit"> Зарегистрироваться </el-button>
            <NuxtLink to="/login"> Войти </NuxtLink>
        </el-form-item>
    </el-form>
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
