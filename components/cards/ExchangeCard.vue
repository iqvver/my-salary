<script setup lang="ts">
import { Delete, Edit } from '@element-plus/icons-vue'
import type { ExchangeModel } from '~/types'

const { card } = defineProps<{
    card: ExchangeModel
}>()

const emit = defineEmits<{
    (event: 'delete', payload: ExchangeModel): void
    (event: 'edit', payload: ExchangeModel): void
}>()
</script>
<template>
    <div class="card">
        <div class="card__id">{{ card.id }}</div>
        <div class="card__header">
            <div>{{ card.name }}/{{ card.title }}</div>
            <div>{{ card.date }}</div>
        </div>
        <div class="card__body">
            <div>{{ card.amount }} шт.</div>
            <div>{{ card.sum }}(₽)</div>
        </div>
        <div class="card__divider" />
        <div class="card__footer">
            <el-button size="default" type="primary" :icon="Edit" @click="$emit('edit', card)" />
            <el-button size="default" type="danger" :icon="Delete" @click="$emit('delete', card)" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 45%;
    min-width: 300px;
    min-height: 150px;
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    border-radius: 5px;

    @media (max-width: 750px) {
        min-width: 100%;
    }

    &__id {
        font-size: 12px;
        margin-bottom: 5px;
        color: rgba(144, 147, 153, 1);
    }

    &__header,
    &__body,
    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        font-size: 14px;
    }

    &__divider {
        width: 100%;
        height: 1px;
        background-color: rgba(144, 147, 153, 1);
        margin: 5px 0;
    }
}
</style>
