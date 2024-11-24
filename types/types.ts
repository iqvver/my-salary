/**
 * Отображение месяцев в каталоге
 */
export type MonthModel = {
    readonly id?: string
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
    readonly id?: string
    /**
     * Дата
     */
    date: string
    /**
     * Номер месяца
     */
    monthId: number
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
