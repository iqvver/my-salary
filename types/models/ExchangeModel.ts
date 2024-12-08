/**
 * Отображение смены в каталоге
 */
export type ExchangeModel = {
    readonly id?: number
    /**
     * Дата
     */
    date: string
    /**
     * Какому пользователю принадлежит
     */
    fromUserId: number
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
