import type { ExchangeModel, ExchangesModel } from '~/types'

const initialExchanges: ExchangesModel = [
    {
        id: 1,
        date: '2016-05-02',
        monthId: 8,
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
        monthId: 9,
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
            isLoading: true,
        }
    },
    getters: {
        async readExchanges(state) {
            return (state.exchanges = initialExchanges), (state.isLoading = false)
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
                this.isLoading = false
            }
        },

        async deleteExchange(payload: number) {
            console.log(payload)
            // try {
            //     this.$state.exchanges = this.$state.exchanges.filter(
            //         (exchange) => exchange.id!== payload.id
            //     )
            //     ElNotification({
            //         title: 'Успех',
            //         message: 'Смена удалена',
            //         type:'success',
            //     })
            // } catch (error) {
            //     ElNotification({
            //         title: 'Ошибка получения каталога',
            //         message: 'Error',
            //         type: 'error',
            //     })
            // } finally {
            //     this.isLoading = false
            // }
        },

        async filterExchange(payload: number) {
            this.$state.filterExchanges = this.$state.exchanges?.filter(
                (item: { monthId: number }) => item.monthId === payload
            )
            return this.$state.filterExchanges
        },
    },
})
