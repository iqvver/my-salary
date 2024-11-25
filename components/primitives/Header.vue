<script setup lang="ts">
import { Setting } from '@element-plus/icons-vue'
import { useAuthStore } from '~/store/auth'

const auth = useAuthStore()
</script>
<template>
    <el-header class="header">
        <div class="header__wrapper">
            <el-dropdown>
                <el-icon>
                    <setting />
                </el-icon>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Настройки</el-dropdown-item>
                        <el-dropdown-item>Выйти</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <span>{{ auth.name }}</span>
        </div>
    </el-header>
</template>
<style scoped lang="scss">
.header {
    display: flex;
    align-items: center;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

    &__wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
    }
}
</style>
