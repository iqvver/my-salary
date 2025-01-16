export const useMetaStore = defineStore({
    id: 'meta',
    state: () => {
        return {
            isMobile: false,
            isTablet: false,
            isDesktop: false,
            //lang: 'RU'
        }
    }
})
