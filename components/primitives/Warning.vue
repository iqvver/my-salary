<script setup lang="ts">
import { WarnTriangleFilled } from '@element-plus/icons-vue'

</script>
<template>
    <div class="warning">
        <el-icon :size="30">
            <WarnTriangleFilled :size="100" color="#E6A23C" />
        </el-icon>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<style scoped lang="scss">
.warning {
    border: 1.5px solid #E6A23C;
    background-color: #e6a23c2d;
    display: flex;
    align-items: center;
    padding: 14px 20px;
    border-radius: 20px;
    color: #555;
    margin: 0 auto;

    & i {
        margin-right: 10px;
    }
}
</style>