<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { PositionEnum } from '~/types/types'
import type { FormInstance, FormRules } from 'element-plus'
import { User } from '@element-plus/icons-vue'
import * as form from '~/types/login-form'
import { options } from '~/types/types'

definePageMeta({ layout: 'personal' })
useHead({ title: 'Профиль' })

const editMode = ref(false)
const isLoading = ref(false)
const auth = useAuthStore()
const userDelete = (user: number) => {
    // Вызов функции удаления профиля
    auth.deleteUser(user)
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<form.UserModel>({
    ...form.initialValues,
    id: auth.authUserId,
})
const rules = reactive<FormRules<form.UserModel>>(form.rules)
const openEditMode = () => {
    editMode.value = true
}

const submitForm = () => {
    isLoading.value = true
    auth.updateUser(ruleForm)
    editMode.value = false
    isLoading.value = false
}
</script>
<template>
    <div class="profile">
        <h1>Профиль</h1>
        <p>Здесь вы можете увидеть информацию о вашем профиле:</p>
        <!-- Вывод информации о профиле -->
        <el-button @click="openEditMode" type="primary">Изменить данные</el-button>
        <div>Имя: {{ auth.authUser }}</div>
        <div>Должность: {{ auth.authJob }}</div>
        <div v-if="auth?.authJob === PositionEnum.OPERATOR">Оклад: {{ options[auth.authJob].summa }}</div>
        <div v-if="auth?.authJob === PositionEnum.ASSISTANT">Оклад: {{ options[auth.authJob].summa }}</div>
        <el-button v-if="!editMode" @click="userDelete(auth.authUserId)" type="danger" style="width: 200px">
            Удалить профиль
        </el-button>

        <el-form
            v-else
            @submit.prevent="submitForm"
            :label-position="'top'"
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="120px"
            class="login-form"
            status-icon>
            <el-form-item>
                <el-input v-model="ruleForm.loginName" :placeholder="auth.authUser" :prefix-icon="User" />
            </el-form-item>
            <el-form-item>
                <el-select v-model="ruleForm.loginJob" :placeholder="auth.authJob" prop="loginJob">
                    <el-option v-for="item in options" :key="item.title" :label="item.title" :value="item.title" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button :loading="isLoading" native-type="submit" type="success" style="width: 200px">
                    Сохранить профиль
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style scoped lang="scss">
.profile {
    width: 40%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
