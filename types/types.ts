import type { ExchangeModel, MonthModel } from '.'

export interface MonthsModel extends Array<MonthModel> {}
export interface ExchangesModel extends Array<ExchangeModel> {}

//Разобраться
export type ExtendedMonthSoreModel = {
    month: MonthModel[]
    selectedMonth: string
    isLoading: boolean
    // TODO: типизовать
    readMonth: any
    createMonth: any
    deleteMonth: any
}

export type ExtendedExchangeSoreModel = {
    exchanges: ExchangeModel[]
    filterExchanges: ExchangeModel[]
    isLoading: true
    // TODO: типизовать
    readExchanges: any
    addExchanges: any
    deleteExchange: any
}
