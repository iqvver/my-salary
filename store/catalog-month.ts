﻿import type { MonthsModel, MonthModel } from '~/types'
import dayjs from 'dayjs'
import { MONTH_MASK } from '~/types/const'

const initialMonth: MonthsModel = [
    {
        id: '1',
        title: 'Август',
        transcriptionInMonth: 'August',
        numInMonth: 8,
        date: '156165',
        fromUserId: 2,
    },
    {
        id: '2',
        title: 'Сентябрь',
        transcriptionInMonth: 'September',
        numInMonth: 9,
        fromUserId: 1,
        date: '157783',
    },
]

//TODO: добавить мутации
//TODO: сделать что бы не можно было добавлять два одинаковых месяца

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
        async createMonth(payload: MonthModel) {
            const newMonth = {
                id: payload.id,
                date: payload.date,
                title: new Date(payload.date).toLocaleString('ru', { month: 'long' }).toUpperCase(),
                transcriptionInMonth: dayjs(payload.date).format(MONTH_MASK),
                fromUserId: payload.fromUserId,
            }
            try {
                ;(this.$state.month = [...this.$state.month, newMonth]),
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

        async filterMonth(payload: number) {
            this.$state.filteringMonth = this.$state.month?.filter(
                (item: { fromUserId: number }) => item.fromUserId === payload
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
