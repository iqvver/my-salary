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
     * Транскрипция месяца
     */
    transcriptionInMonth: string
    /**
     * Номер месяца
     */
    numInMonth: number
}