import type { UserModel, UsersModel } from '~/types'

const initialUser: UsersModel = [
    {
        id: 1,
        loginName: 'Август',
        loginJob: 'august',
    },
    {
        id: 2,
        loginName: 'Сентябрь',
        loginJob: 'september',
    },
]

export const useAuthStore = defineStore({
    id: 'userCatalog',
    state: () => {
        return {
            user: [] as UserModel[],
            isAuth: false,
            authUser: 'Какое-то имя',
            authJob: 'Должность',
            isLoading: true,
        }
    },
    getters: {
        readUser(state) {
            return (state.user = initialUser)
        },
    },
    actions: {
        async registration(payload: UserModel) {
            const newUser = {
                id: Math.random(),
                loginName: payload.loginName,
                loginJob: payload.loginJob,
            }
            try {
                ;(this.$state.user = [...this.$state.user, newUser]),
                    ElNotification({
                        title: `Пользователь ${payload.loginName} зарегистрирован`,
                        message: 'Месяц добавлен',
                        type: 'success',
                    })
                const router = useRouter()
                router.push('/login')
            } catch (error) {
                ElNotification({
                    title: `${error}`.split(':')[1],
                    message: 'Что-то пошло не так',
                    type: 'error',
                })
                throw new Error('Registration response error')
            } finally {
                this.isLoading = false
            }
        },
        clear() {
            this.authUser = ''
            this.authJob = ''
            this.isAuth = false
        },
        login(payload: UserModel) {
            this.authUser = payload.loginName
            this.authJob = payload.loginJob
            this.isAuth = true
        },
        logout() {
            this.clear()
            const router = useRouter()
            router.push('/login')
        },
    },
})
