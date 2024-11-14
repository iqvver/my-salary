/**
 * Отображение месяцев в каталоге
 */
export type MonthModel = {
    readonly id?: number
    /**
     * Название месяцев
     */
    title: string
    /**
     * Номер месяца
     */
    num: number
}

/**
 * Отображение смены в каталоге
 */
export type ExchangeModel = {
    readonly id?: number | undefined;
    /**
     * Дата
     */
    date: string
    /**
     * Номер месяца
     */
    month: number
    /**
     * Название профиля
     */
    designation: string
    /**
     * Количество
     */
    amount: number
    /**
     * Сумма
     */
    sum: number
}

export interface MonthsModel extends Array<MonthModel> {}
export interface ExchangesModel extends Array<ExchangeModel> {}
