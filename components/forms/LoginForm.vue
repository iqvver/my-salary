<script lang="ts" setup>
import { useAuthStore } from '~/store/auth'
import { Select } from '@element-plus/icons-vue'
import type { UserModel } from '~/types'

const isLoading = ref(false)
const authStore = useAuthStore()

const logIn = async (user: UserModel) => {
    authStore.login(user)
}
</script>
<template>
    <div label="" v-for="user in authStore.users" class="login-form__item">
        <div>{{ user.loginName }}</div>
        <el-button size="default" type="success" plain :icon="Select" :loading="isLoading" @click="logIn(user)" />
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
