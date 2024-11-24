﻿import type { MonthsModel, MonthModel } from '~/types'

const initialMonth: MonthsModel = [
    {
        id: '1',
        title: 'Август',
        transcriptionInMonth: 'august',
        numInMonth: 8,
    },
    {
        id: '2',
        title: 'Сентябрь',
        transcriptionInMonth: 'september',
        numInMonth: 9,
    },
]

export const useMonthCatalogStore = defineStore({
    id: 'monthCatalog',
    state: () => {
        return {
            month: [] as MonthModel[],
            selectedMonth: ' ',
            isLoading: true,
        }
    },

    getters: {
        readMonth(state) {
            return (state.month = initialMonth), (state.isLoading = false)
        },
    },

    actions: {
        async createMonth(payload: MonthModel) {
            try {
                ;(this.$state.month = [...this.$state.month, payload]),
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

        async deleteMonth(payload: MonthModel) {
            console.log(payload)
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
                this.isLoading = false
            }
        },
    },
})
