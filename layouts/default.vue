<script setup lang="ts">
import { useMonthCatalogStore } from '~/store/catalog-month'
import { useAuthStore } from '~/store/auth'

const auth = useAuthStore()
const monthList = useMonthCatalogStore()

useHead({
    title: 'Моя З/П',
})
</script>

<template>
    <PrimitivesHeader :name="auth.name" />
    <el-container class="container">
        <PrimitivesAside :monthList="monthList" />
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
