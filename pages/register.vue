<script lang="ts" setup>
import RegistrationForm from '~/components/forms/RegistrationForm.vue'
import PageFormTemplate from '~/components/templates/PageFormTemplate.vue'
</script>
<template>
    <PageFormTemplate title="Регистрация" subtitle="Введите ваше имя и должность" symbol="&#64;">
        <RegistrationForm />
    </PageFormTemplate>
</template>
<style scoped>
.t-form-container {
    margin: 40px auto;
}
</style>
