<script setup lang="ts">

definePageMeta({documentDriven: { page: false } })
useHead({ title: 'Профиль' })
</script>

<template>
    <PrimitivesHeader />
    <el-container class="container">
        <PrimitivesAside />
        <el-main>
            <slot />
        </el-main>
    </el-container>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
}
</style>
