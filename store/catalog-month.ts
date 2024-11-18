import type { MonthsModel, MonthModel } from '~/types'

const initialMonth: MonthsModel = [
    {
        id: 1,
        title: 'Август',
        num: 8,
    },
    {
        id: 2,
        title: 'Сентябрь',
        num: 9,
    },
    {
        id: 2,
        title: 'Сентябрь',
        num: 9,
    },
]

export const useMonthCatalogStore = defineStore({
    id: 'monthCatalog',
    state: () => {
        return {
            month: [] as MonthModel[],
            isLoading: true,
        }
    },

    getters: {
        readMonth(state) {
            return (state.month = initialMonth)
        },
    },

    actions: {
        async createMonth(payload: MonthModel) {
            try {
                this.$state.month = [...this.$state.month, payload]
                ElNotification({
                    title: 'Успех',
                    message: 'Месяц добавлен',
                    type: 'success',
                })
            } catch (error) {
                ElNotification({
                    title: 'Ошибка Добавления',
                    message: 'Error',
                    type: 'error',
                })
            } finally {
                this.isLoading = false
            }
        },
    },
})
