<script lang="ts" setup>
import { useAuthStore } from './store/auth'
import ru from 'element-plus/es/locale/lang/ru'

const authStore = useAuthStore()
const router = useRouter()

watchEffect(() => {
    if (!authStore.isAuth) {
        //router.push('/login')
    }
})
</script>

<template>
    <NuxtLayout>
        <el-config-provider :locale="ru">
        <NuxtPage />
    </el-config-provider>
    </NuxtLayout>
</template>
<style lang="scss"></style>
