<script setup lang="ts">
import ru from 'element-plus/es/locale/lang/ru'

definePageMeta({ documentDriven: { page: false } })
useHead({
    title: 'Заводчанин З/П',
})
</script>

<template>
    <el-config-provider :locale="ru">
        <PrimitivesHeader />
        <el-container class="container">
            <PrimitivesAside />
            <el-main>
                <slot />
            </el-main>
        </el-container>
    </el-config-provider>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
}
</style>
