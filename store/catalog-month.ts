import type { MonthPreviewModel, MonthsModel, MonthModel } from '~/types'
import dayjs from 'dayjs'
import { MONTH_MASK } from '~/types/const'

const initialMonth: MonthsModel = [
    {
        id: '1',
        title: 'Август',
        transcriptionInMonth: 'August',
        date: '156165',
        fromUserId: '2',
    },
    {
        id: '2',
        title: 'Сентябрь',
        transcriptionInMonth: 'September',
        fromUserId: '1',
        date: '157783',
    },
]

export const useMonthCatalogStore = defineStore({
    id: 'monthCatalog',
    state: () => {
        return {
            month: [] as MonthModel[],
            selectedMonth: ' ',
            filteringMonth: [] as MonthModel[],
        }
    },

    getters: {
        readMonth(state) {
            return (state.month = initialMonth)
        },
    },

    actions: {
        async createMonth(payload: MonthPreviewModel) {
            try {
                if (
                    this.$state.filteringMonth.find(
                        (month) => month.transcriptionInMonth === dayjs(payload.date).format(MONTH_MASK)
                    )
                ) {
                    return ElNotification({
                        title: 'Ошибка Добавления',
                        message: 'Данный месяц уже добавлен в каталог',
                        type: 'error',
                    })
                }
                ;(this.$state.month = [...this.$state.month, convertingNewMonth(payload)]),
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
            }
        },

        async filterMonth(payload: string) {
            this.$state.filteringMonth = this.$state.month?.filter(
                (item: { fromUserId: string }) => item.fromUserId === payload
            )
            return this.$state.filteringMonth
        },

        async deleteMonth(payload: MonthModel) {
            try {
                this.$state.month = this.$state.month.filter((month) => month.id !== payload.id)
                ElNotification({
                    title: 'Успех',
                    message: 'Месяц удален',
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
    },
})
