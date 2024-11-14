export const useAuthStore = defineStore({
    id: 'auth',
    state: () => {
        return {
            name: 'Eduardo' as string,
            password: '' as string,
        }
    },
    actions: {
        clear() {},
        logout() {
            this.clear()
        },
    },
})
