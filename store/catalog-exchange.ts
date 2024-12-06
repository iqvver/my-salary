import type { ExchangeModel, ExchangesModel } from '~/types'

const initialExchanges: ExchangesModel = [
    {
        id: '1',
        date: '2016-05-02',
        monthId: 8,
        monthTranscription: 'august',
        designation: 'Рама',
        amount: 11,
        sum: 357,
    },
    {
        id: '2',
        /**
         * Дата
         */
        date: '2016-08-02',
        /**
         * К какому месяцу привязана смена
         */
        monthId: 9,
        /**
         * Транскрипция месяца
         */
        monthTranscription: 'september',
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

export const useExchangesStore = defineStore({
    id: 'exchangesCatalog',
    state: () => {
        return {
            exchanges: [] as ExchangeModel[],
            filterExchanges: [] as ExchangeModel[],
        }
    },

    getters: {
        async readExchanges(state) {
            return (state.exchanges = initialExchanges)
        },
    },

    actions: {
        async addExchanges(payload: ExchangeModel) {
            try {
                this.$state.exchanges = [...this.$state.exchanges, payload]
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

        async filterExchange(payload: string) {
            this.$state.filterExchanges = this.$state.exchanges?.filter(
                (item: { monthTranscription: string }) => item.monthTranscription === payload
            )
            return this.$state.filterExchanges
        },

        async updateExchange(payload: ExchangeModel, template: ExchangeModel) {
            try {
                const index = this.$state.exchanges.findIndex((exchange) => exchange.id === payload.id)
                if (index > -1) {
                    this.$state.exchanges[index] = { ...template }
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
