﻿import type { UserModel, UsersModel } from '~/types'
import type { AuthorizationUserModel } from '~/types/models/UserModel'

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
            const localUser = getLSItem('authUser')
            if (localUser.isAuth) {
                this.authUserId = localUser.id
                this.authUser = localUser.loginName
                this.authJob = localUser.loginJob
                this.isAuth = localUser.isAuth
            }
            return (state.users = getLSItem('users'))
        },
    },

    actions: {
        async registration(payload: UserModel) {
            try {
                ;(this.$state.users = [...this.$state.users, convertingNewUser(payload)]),
                    setLSItem('users', this.$state.users)
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
            const authUser: AuthorizationUserModel = {
                id: '',
                loginName: '',
                loginJob: '',
                isAuth: false,
            }
            setLSItem('authUser', authUser)
            this.authUser = ''
            this.authJob = ''
            this.isAuth = false
            const router = useRouter()
            router.push('/login')
        },

        //TODO: переделить в объект
        login(payload: UserModel) {
            const router = useRouter()
            const authUser: AuthorizationUserModel = { ...payload, isAuth: true }
            try {
                this.authUserId = payload.id
                this.authUser = payload.loginName
                this.authJob = payload.loginJob
                this.isAuth = true
                setLSItem('authUser', authUser)
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
                setLSItem('users', this.$state.users)
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
                    setLSItem('users', this.$state.users)
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
