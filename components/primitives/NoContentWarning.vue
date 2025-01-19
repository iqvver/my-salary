<script setup lang="ts">
import Warning from './Warning.vue'
</script>
<template>
    <Warning>
        <slot></slot>
        <TypographyTooltip qstStyle="transform: translateY(0px);margin-left: 4px" color="var(--blue)">
            Вы не добавили ни одной смены в этом месяце.<br />Что бы добавить смену, нажмите "Добавить смену"!
        </TypographyTooltip>
    </Warning>
</template>
<style></style>
<style scoped lang="scss">
.warning {
    padding: 14px 20px;
    width: fit-content;
    margin: 10px auto;
}
</style>
