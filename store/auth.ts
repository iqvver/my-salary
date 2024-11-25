export const useAuthStore = defineStore({
    id: 'auth',
    state: () => {
        return {
            name: 'Eduardo' as string,
            myJob : '' as string,
        }
    },
    actions: {
        clear() {},
        logout() {
            this.clear()
        },
    },
})
