<script lang="ts" setup>
import MobileDetect from 'mobile-detect'
import { useMetaStore } from '~/store/meta'
import 'element-plus/dist/index.css'

const meta = useMetaStore()
const headers = useRequestHeaders()

const ua = headers['user-agent'] || (process.client ? window.navigator.userAgent : '')

if (ua) {
    const md = new MobileDetect(ua)
    meta.$state.isMobile = md.phone() !== null || md.mobile() === 'UnknownMobile'
    meta.$state.isTablet = md.tablet() !== null || md.mobile() === 'UnknownTablet'
    meta.$state.isDesktop = !meta.$state.isMobile && !meta.$state.isTablet
}
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<style lang="scss"></style>
