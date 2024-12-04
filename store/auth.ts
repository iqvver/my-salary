import type { UserModel, UsersModel } from '~/types'

const initialUser: UsersModel = [
    {
        id: 1,
        myName: 'Август',
        myJob: 'august',
    },
    {
        id: 2,
        myName: 'Сентябрь',
        myJob: 'september',
    },
]

export const useAuthStore = defineStore({
    id: 'userCatalog',
    state: () => {
        return {
            user: [] as UserModel[],
            isAuth: false,
            authUser: 'ddddd',
            authJob: '',
        }
    },
    getters: {
        readUser(state) {
            return (state.user = initialUser)
        },
    },
    actions: {
        clear() {
            this.authUser = ''
            this.authJob = ''
            this.isAuth = false
        },
        login(payload: UserModel) {
            this.authUser = payload.myName
            this.authJob = payload.myJob
            this.isAuth = true
        },
        logout() {
            this.clear()
            const router = useRouter()
            router.push('/login')
        },
    },
})
