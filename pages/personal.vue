<script setup lang="ts">
import { useAuthStore } from '~/store/auth'
import { PositionEnum } from '~/types/types'

definePageMeta({ layout: 'personal' })
useHead({ title: 'Профиль' })

const editMode = ref(false)
const auth = useAuthStore()
const userDelete = (user: number) => {
    // Вызов функции удаления профиля
    auth.deleteUser(user)
}

const showEditMode = () => {
    editMode.value = true
}

const showEditMode1 = () => {
    editMode.value = false
}
</script>
<template>
    <div class="profile">
        {{ editMode }}
        <h1>Профиль</h1>
        <p>Здесь вы можете увидеть информацию о вашем профиле:</p>
        <!-- Вывод информации о профиле -->
        <el-button @click="showEditMode" type="primary">Изменить данные</el-button>
        <div>Имя: {{ auth?.authUser }}</div>
        <div>Должность: {{ auth?.authJob }}</div>
        <div v-if="auth?.authJob === PositionEnum.OPERATOR">Оклад: 40000</div>
        <div v-if="auth?.authJob === PositionEnum.ASSISTANT">Оклад: 30000</div>
        <el-button v-if="!editMode" @click="userDelete(auth.authUserId)" type="danger" style="width: 200px">
            Удалить профиль
        </el-button>
        <el-button v-else @click="showEditMode1" type="success" style="width: 200px"> Сохранить профиль </el-button>
    </div>
</template>
<style scoped lang="scss">
.profile {
    width: 50%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
