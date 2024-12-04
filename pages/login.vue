<script lang="ts" setup>
import LoginForm from '~/components/forms/LoginForm.vue'
import PageFormTemplate from '~/components/templates/PageFormTemplate.vue'
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()

definePageMeta({ layout: 'default' })

watchEffect(() => {
    authStore.readUser
})
</script>
<template>
    <PageFormTemplate title="Войти как" subtitle="" symbol="&#9993;">
        <LoginForm />
    </PageFormTemplate>
</template>
<style></style>
