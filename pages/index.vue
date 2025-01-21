<script setup lang="ts">
const router = useRouter()
const route = useRoute()

definePageMeta({ layout: 'table' })

//TODO: вот тут можно попробовать организовать роуты
onMounted(() => {
    if (route.path === '/') {
        router.push('/login')
    }
})
</script>

<template></template>

<style scoped lang="scss">
@forward '../assets/scss/global/index.scss';
</style>
