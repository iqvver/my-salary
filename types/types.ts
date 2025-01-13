import type { ExchangeModel, MonthModel, UserModel } from '.'

export interface MonthsModel extends Array<MonthModel> {}
export interface ExchangesModel extends Array<ExchangeModel> {}
export interface UsersModel extends Array<UserModel> {}

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
