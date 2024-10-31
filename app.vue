<script lang="ts" setup>
import { useCounterStore } from './store/meta'

const meta = useCounterStore()
</script>

<template>
    <NuxtLayout>
        <v-app class="app">
            <NuxtPage />
            {{ meta.name }}
            <el-button type="success">Success</el-button>
        </v-app>
    </NuxtLayout>
</template>
<style lang="scss">
@forward '~/assets/scss/global/index.scss';
</style>
