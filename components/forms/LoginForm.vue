<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'
import { Edit, Message } from '@element-plus/icons-vue'

const router = useRouter()
const isLoading = ref(false)
const authStore = useAuthStore()

const logIn = async (user: any) => {
    try {
        isLoading.value = true
        authStore.login(user)
        router.push('/')
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
    <div label="" v-for="user in authStore.user" class="login-form__item">
        <div>{{ user.loginName }}</div>
        <el-button size="default" type="primary" plain :icon="Edit" :loading="isLoading" @click="logIn(user)" />
    </div>
    <div class="login-form__footer">
        <span class="login-form__footer__descr_link">Нет аккаунта?</span>
        <NuxtLink to="/register"> Зарегистрироваться </NuxtLink>
    </div>
</template>
<style lang="scss" scoped>
.login-form {
    margin-top: 32px;

    &__item {
        display: flex;
        justify-content: space-between;
        width: 70%;
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
