import type { ExchangeModel, ExchangesModel } from '~/types'

const initialExchanges: ExchangesModel = [
    {
        id: 1,
        date: '2016-05-02',
        fullDate: '2016-05-02',
        fromUserId: 1,
        monthTranscription: 'August',
        title: 103001,
        amount: 11,
        sum: 357,
        name: 'Рама 3',
    },
    {
        id: 2,
        /**
         * Дата
         */
        date: '2016-08-02',
        fullDate: '2016-05-02',
        /**
         * К какому профилю привязана смена
         */
        fromUserId: 2,
        /**
         * Транскрипция месяца
         */
        monthTranscription: 'September',
        /**
         * Название профиля
         */
        title: 105001,
        /**
         * Количество профиля
         */
        amount: 11,
        /**
         * Сумма amount * 6.5 * 0.6
         */
        sum: 357,
        name: 'Рама 3',
    },
]

export const useExchangesStore = defineStore({
    id: 'exchangesCatalog',
    state: () => {
        return {
            exchanges: [] as ExchangeModel[],
            filterExchanges: [] as ExchangeModel[],
            totalSummary: 0,
        }
    },

    getters: {
        async readExchanges(state) {
            return (state.exchanges = initialExchanges)
        },
        async getTotalSummary(state) {
            return (state.totalSummary = state.filterExchanges.reduce((a, exchange) => a + exchange.sum!, 0))
        },
    },

    actions: {
        async addExchanges(payload: ExchangeModel) {
            try {
                this.$state.exchanges = [
                    ...this.$state.exchanges,
                    convertingNewExchanges(payload, this.$state.filterExchanges.length),
                ]
                ElNotification({
                    title: 'Успех',
                    message: 'Смена добавлена',
                    type: 'success',
                })
            } catch (error) {
                ElNotification({
                    title: 'Ошибка получения каталога',
                    message: 'Error',
                    type: 'error',
                })
            } finally {
            }
        },

        async deleteExchange(payload: ExchangeModel) {
            try {
                this.$state.exchanges = this.$state.exchanges.filter((exchange) => exchange.id !== payload.id)
                ElNotification({
                    title: 'Успех',
                    message: 'Смена удалена',
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

        async filterExchange(payload: string, userId: number) {
            this.$state.filterExchanges = this.$state.exchanges
                ?.filter(
                    (item: { fromUserId: number; monthTranscription?: string }) =>
                        item.monthTranscription === payload && item.fromUserId === userId
                )
                .sort((a: any, b: any) => a.fullDate - b.fullDate)
            return this.$state.filterExchanges
        },

        async updateExchange(payload: ExchangeModel) {
            try {
                const index = this.$state.exchanges.findIndex((exchange) => exchange.id === payload.id)
                if (index > -1) {
                    this.$state.exchanges[index] = { ...convertingNewExchanges(payload, payload.id!) }
                    ElNotification({
                        title: 'Успех',
                        message: 'Смена изменена',
                        type: 'success',
                    })
                }
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
