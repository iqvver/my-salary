import type { ExchangesModel } from '~/types'

const initialExchages: ExchangesModel = [
    {
        id: 1,
        date: '2016-05-02',
        monthId: 5,
        designation: 'Рама',
        amount: 11,
        sum: 357,
    },
    {
        id: 2,
        /**
         * Дата
         */
        date: '2016-08-02',
        /**
         * К какому месяцу привязана смена
         */
        monthId: 6,
        /**
         * Название профиля
         */
        designation: 'Рама5',
        /**
         * Количество профиля
         */
        amount: 11,
        /**
         * Сумма amount * 6.5 * 0.6
         */
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
