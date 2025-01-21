<script setup lang="ts">
import { WarnTriangleFilled } from '@element-plus/icons-vue'
</script>
<template>
    <div class="warning">
        <el-icon :size="30">
            <WarnTriangleFilled :size="100" color="var( --warning)" />
        </el-icon>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<style scoped lang="scss">
.warning {
    border: 1.5px solid var(--warning);
    background-color: var(--color-bg-warning);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
    border-radius: 10px;
    margin: 0 auto;

    & i {
        margin-right: 10px;
    }
}
</style>
