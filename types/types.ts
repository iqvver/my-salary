import type { ExchangeModel, MonthModel, UserModel } from '.'

export interface MonthsModel extends Array<MonthModel> {}
export interface ExchangesModel extends Array<ExchangeModel> {}
export interface UsersModel extends Array<UserModel> {}

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

export enum PositionEnum {
    OPERATOR = 'operator',
    ASSISTANT = 'assistant',
}

export type PositionValueType = 'Оператор' | 'Помощник'
