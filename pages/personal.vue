<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { PositionEnum } from '~/types/types'
import type { FormInstance, FormRules } from 'element-plus'
import { User } from '@element-plus/icons-vue'
import * as form from '~/types/login-form'
import { options } from '~/types/types'
import { useMonthCatalogStore } from '~/store/catalog-month'

definePageMeta({ layout: 'personal' })
useHead({ title: 'Профиль' })

const auth = useAuthStore()
const monthStore = useMonthCatalogStore()
const router = useRouter()
const editMode = ref(false)
const isLoading = ref(false)

watchEffect(() => {
    if (!auth.authUser.isAuth) {
        router.push('/login')
    } else if (monthStore.filteringMonth.length) {
        router.push(monthStore.filteringMonth.at(-1)?.transcriptionInMonth + '')
    }
})

const userDelete = (user: string) => {
    // Вызов функции удаления профиля
    auth.deleteUser(user)
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<form.UserModel>({
    ...form.initialValues,
    id: auth.authUser.id,
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
        <div>Имя: {{ auth.authUser.loginName }}</div>
        <div>Должность: {{ auth.authUser.loginJob }}</div>
        <div v-if="auth?.authUser.loginJob === PositionEnum.OPERATOR">
            Оклад: {{ options[auth.authUser.loginJob].summa }}
        </div>
        <div v-if="auth?.authUser.loginJob === PositionEnum.ASSISTANT">
            Оклад: {{ options[auth.authUser.loginJob].summa }}
        </div>
        <el-button v-if="!editMode" @click="userDelete(auth.authUser.id)" type="danger" style="width: 200px">
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
                <el-input v-model="ruleForm.loginName" :placeholder="auth.authUser.loginName" :prefix-icon="User" />
            </el-form-item>
            <el-form-item>
                <el-select v-model="ruleForm.loginJob" :placeholder="auth.authUser.loginJob" prop="loginJob">
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
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
