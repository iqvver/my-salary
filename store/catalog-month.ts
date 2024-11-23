﻿import type { MonthsModel, MonthModel } from '~/types'

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
            month: [] as MonthModel[],
            selectedNumMonth: 9,
            isLoading: true,
        }
    },

    getters: {
        readMonth(state) {
            return (
                (state.month = initialMonth), (state.isLoading = false)
                //(state.selectedNumMonth = state.month.at(-1)?.num!)
            )
        },
    },

    actions: {
        async createMonth(payload: MonthModel) {
            try {
                (this.$state.month = [...this.$state.month, payload]),
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

        async deleteMonth(payload: number) {
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
    },
})
