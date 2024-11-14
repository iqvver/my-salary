import type { ExchangesModel } from '~/types'

const initialExchages: ExchangesModel = [
    {
        id: 1,
        date: '2016-05-02',
        month: 5,
        designation: 'Рама',
        amount: 11,
        sum: 357,
    },
    {
        id: 2,
        date: '2016-08-02',
        month: 6,
        designation: 'Рама5',
        amount: 11,
        sum: 357,
    },
]

export const useExchagesStore = defineStore({
    id: 'monthCatalog',
    state: () => {
        return {
            month: { ...initialExchages },
            isLoading: true,
        }
    },
    actions: {
        addMonth() {
            try {
                const response = useExchagesStore
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
