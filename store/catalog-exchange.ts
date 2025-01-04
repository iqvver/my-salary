import type { ExchangeModel, ExchangesModel } from '~/types'
import dayjs from 'dayjs'
import * as nomination from '~/types/const'
import { DATE_MASK } from '~/types/const'

const initialExchanges: ExchangesModel = [
    {
        id: 1,
        date: '2016-05-02',
        fullDate: '2016-05-02',
        fromUserId: 1,
        monthId: 8,
        monthTranscription: 'August',
        title: 103001,
        amount: 11,
        sum: 357,
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
         * К какому месяцу привязана смена
         */
        monthId: 9,
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
        //TODO: навести порядок (как-то много всего)
        async addExchanges(payload: ExchangeModel) {
            const myDate = ref(new Date(payload.fullDate))
            const nom = nomination.nomination[payload.title]
            const newExchange: ExchangeModel = {
                id: this.$state.filterExchanges.length,
                fullDate: myDate.value,
                title: payload.title,
                name: nom.title,
                fromUserId: payload.fromUserId,
                date: dayjs(myDate.value).format(DATE_MASK),
                monthTranscription: myDate.value.toLocaleString('en-EN', { month: 'long' }),
                monthId: +dayjs(myDate.value).format('M'),
                amount: payload.amount,
                sum: +(payload.amount! * nom.long * nom.price).toFixed(2),
            }
            try {
                this.$state.exchanges = [...this.$state.exchanges, newExchange]
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
            this.$state.filterExchanges = this.$state.exchanges?.filter(
                (item: { fromUserId: number; monthTranscription?: string }) =>
                    item.monthTranscription === payload && item.fromUserId === userId
            )
            return this.$state.filterExchanges
        },

        //TODO: навести порядок (как-то много всего)
        async updateExchange(payload: ExchangeModel) {
            const myDate = ref(new Date(payload.fullDate))
            const nom = nomination.nomination[payload.title]
            const newExchange: ExchangeModel = {
                id: payload.id,
                fullDate: myDate.value,
                title: payload.title,
                name: nom.title,
                fromUserId: payload.fromUserId,
                date: dayjs(myDate.value).format(DATE_MASK),
                monthTranscription: myDate.value.toLocaleString('en-EN', { month: 'long' }),
                monthId: +dayjs(myDate.value).format('M'),
                amount: payload.amount,
                sum: +(payload.amount! * nom.long * nom.price).toFixed(2),
            }
            try {
                const index = this.$state.exchanges.findIndex((exchange) => exchange.id === payload.id)
                if (index > -1) {
                    this.$state.exchanges[index] = { ...newExchange }
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
