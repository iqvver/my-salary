/**
 * Отображение смены в каталоге
 */

//TODO переработать типы организовать наследования
export type ExchangeModel = {
    readonly id?: number
    /**
     * Дата
     */
    date: Date | string
    /**
     * Какому пользователю принадлежит
     */
    fromUserId: number
    /**
     * Транскрипция месяца
     */
    monthTranscription?: string
    /**
     * Номер месяца
     */
    monthId?: number
    /**
     * Название профиля
     */
    name?: string
    /**
     * Название профиля
     */
    title: number | string
    /**
     * Количество
     */
    amount?: number
    /**
     * Сумма
     */
    sum?: number
    /**
     * Объект со всеми свойствами профиля
     */
    nom?: {}
}
