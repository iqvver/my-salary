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