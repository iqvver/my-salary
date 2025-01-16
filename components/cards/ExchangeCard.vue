<script setup lang="ts">
const {} = defineProps<{}>()
</script>
<template>
    <div class="card">
        <div class="card__id">Id</div>
        <div class="card__header">
            <div>title</div>
            <div>data</div>
        </div>
        <div class="card__body">
            <div>count</div>
            <div>sum</div>
        </div>
        <div class="card__footer">
            <div>button</div>
            <div>button</div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.card {
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 150px;
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    border-radius: 5px;

    &__id {
        font-size: 14px;
        margin-bottom: 5px;
    }

    &__header,
    &__body,
    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
    }
}
</style>
