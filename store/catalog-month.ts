import type { MonthsModel } from '~/types'

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
]

export const useMonthCatalogStore = defineStore({
    id: 'monthCatalog',
    state: () => {
        return {
            month: { ...initialMonth },
            isLoading: true,
        }
    },
    actions: {
        addMonth() {
            try {
                const response = useMonthCatalogStore
                ElNotification({
                    title: 'gg',
                    message: 'bb',
                    type: 'success',
                })
                return response
            } catch (error) {
                ElNotification({
                    title: 'Ошибка получения каталога',
                    message: 'Error',
                    type: 'error',
                })
            } finally {
                this.isLoading = false
            }
        },
    },
})
