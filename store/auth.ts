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
            authUserId: 0,
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
            const router = useRouter()
            router.push('/login')
        },
        login(payload: UserModel) {
            this.authUserId = payload.id // Получаем id пользователя
            this.authUser = payload.loginName
            this.authJob = payload.loginJob
            this.isAuth = true
        },
        logout() {
            this.clear()
        },
        async deleteUser(payload: number) {
            try {
                this.$state.user = this.$state.user.filter((user) => user.id !== payload)
                this.clear()
                ElNotification({
                    title: 'Успех',
                    message: 'Профиль удален',
                    type: 'success',
                })
            } catch (error) {
                ElNotification({
                    title: 'Ошибка удаления',
                    message: 'Error',
                    type: 'error',
                })
            } finally {
                this.isLoading = false
            }
        },
    },
})
