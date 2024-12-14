/**
 * Отображение месяцев в каталоге
 */
//TODO переработать типы организовать наследования
export type MonthModel = {
    readonly id?: string
    /**
     * Дата
     */
    date?: Date | string
    /**
     * Название месяцев
     */
    title?: string
    /**
     * Транскрипция месяца
     */
    transcriptionInMonth: string
    /**
     * Номер месяца
     */
    numInMonth?: number
    /**
     * Какому пользователю принадлежит
     */
    fromUserId: number
}
