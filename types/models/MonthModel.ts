/**
 * Отображение месяцев в каталоге
 */

export type MonthPreviewModel = {
    /**
     * id месяца
     */
    readonly id: string
    /**
     * Какому пользователю принадлежит
     */
    fromUserId: string
    /**
     * Месяц
     */
    date: Date | string
}

export type MonthModel = MonthPreviewModel & {
    /**
     * Название месяцев
     */
    title: string
    /**
     * Транскрипция месяца
     */
    transcriptionInMonth: string
}