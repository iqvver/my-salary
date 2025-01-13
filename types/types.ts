import type { ExchangeModel, MonthModel, UserModel } from '.'

export interface MonthsModel extends Array<MonthModel> {}
export interface ExchangesModel extends Array<ExchangeModel> {}
export interface UsersModel extends Array<UserModel> {}

//TODO:Разобраться
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
    OPERATOR = 'Оператор',
    ASSISTANT = 'Помощник',
}

type PositionValueType = 'Оператор' | 'Помощник'

type OptionsInfo = {
    title: PositionValueType
    summa: number
}

export const options: Record<PositionEnum, OptionsInfo> = {
    Оператор: {
        title: 'Оператор',
        summa: 40000,
    },
    Помощник: {
        title: 'Помощник',
        summa: 30000,
    },
}
