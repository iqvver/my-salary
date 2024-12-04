<script setup lang="ts">
const {} = defineProps<{
    title?: string
    subtitle?: string
    symbol?: string
}>()
</script>
<template>
    <div class="template">
        <div class="template__wrap">
            <h2 class="template__title">{{ title }}</h2>
            <h3 class="template__subtitle">{{ subtitle }}</h3>
            <div class="t-form-container">
                <div class="divider">
                    <div class="divider_line" />
                    <div class="divider_text">{{ symbol }}</div>
                    <div class="divider_line" />
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.template {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 84px);

    @media (max-width: 500px) {
        padding: 20px;
    }

    &__wrap {
        margin-top: 70px;
        padding: 24px;
        background-color: rgba(250, 250, 250, 1);
        width: 416px;
        max-height: 382px;
        border-radius: 16px;
        -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

        @media (max-width: 500px) {
            width: 90%;
            margin-top: 20px;
        }

        @media (max-width: 330px) {
            padding-bottom: 15px;
        }
    }

    &__title {
        text-align: center;
        font-weight: 700;
        letter-spacing: 0px;
    }

    &__subtitle {
        font-weight: 400;
        text-align: center;
    }

    & .t-form-container {
        margin: 0 auto;
    }
}

.divider {
    margin-top: 32px;
    display: flex;
    align-items: center;
    &_line {
        background-color: rgba(220, 223, 230, 1);
        height: 1px;
        width: 100%;
    }

    &_text {
        margin: 0 12px;
        color: rgba(205, 208, 214, 1);
    }
}
</style>
