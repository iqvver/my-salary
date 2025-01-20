import type { UserModel, UsersModel } from '~/types'

const initialUser: UsersModel = [
    {
        id: '1',
        loginName: 'Писун',
        loginJob: 'Помощник',
    },
    {
        id: '2',
        loginName: 'Писька',
        loginJob: 'Оператор',
    },
]

export const useAuthStore = defineStore({
    id: 'userCatalog',
    state: () => {
        return {
            users: [] as UserModel[],
            isAuth: false,
            authUserId: '',
            authUser: 'Какое-то имя',
            authJob: 'Должность',
        }
    },

    getters: {
        readUser(state) {
            return (state.users = initialUser)
        },
    },

    actions: {
        async registration(payload: UserModel) {
            try {
                ;(this.$state.users = [...this.$state.users, convertingNewUser(payload)]),
                    ElNotification({
                        title: `Пользователь ${payload.loginName} зарегистрирован`,
                        message: 'Пользователь добавлен',
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
            const router = useRouter()
            try {
                this.authUserId = payload.id! // Получаем id пользователя
                this.authUser = payload.loginName
                this.authJob = payload.loginJob
                this.isAuth = true
                router.push('/')
                ElNotification({
                    title: 'Вход выполнен',
                    type: 'success',
                })
            } catch (error) {
                console.log(error)
                ElNotification({
                    title: `${error}`.split(':')[1],
                    message: 'Что-то пошло не так',
                    type: 'error',
                })
                throw new Error('Registration response error')
            } finally {
            }
        },

        logout() {
            this.clear()
        },

        deleteUser(payload: string) {
            try {
                this.$state.users = this.$state.users.filter((user) => user.id !== payload)
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
            }
        },

        async updateUser(payload: UserModel) {
            try {
                const index = this.$state.users.findIndex((user) => user.id === payload.id)
                if (index > -1) {
                    this.$state.users[index] = { ...payload }
                    ElNotification({
                        title: 'Успех',
                        message: 'Профиль изменён',
                        type: 'success',
                    })
                }
                this.login(payload)
            } catch (error) {
                ElNotification({
                    title: 'Ошибка изменения',
                    message: 'Error',
                    type: 'error',
                })
            } finally {
            }
        },
    },
})
