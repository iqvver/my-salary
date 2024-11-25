<script setup lang="ts">
import { useMonthCatalogStore } from '~/store/catalog-month'

const monthStore = useMonthCatalogStore()

useHead({
    title: 'Моя З/П',
})
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
