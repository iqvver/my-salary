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
     * Транскрипция месяца
     */
    monthTranscription: string
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
