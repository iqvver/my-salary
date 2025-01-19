/**
 * Отображение смены в каталоге
 */

export type ExchangeInitialModel = {
    /**
     * id Смены
     */
    id?: number
    /**
     * Код профиля
     */
    title: number | string
    /**
     * Количество профиля
     */
    amount: number
    /**
     * Дата полностью
     */
    fullDate: Date | string
}
export type ExchangePayloadModel = ExchangeInitialModel & {
    /**
     * Какому пользователю принадлежит
     */
    fromUserId: number
}

export type ExchangeModel = ExchangePayloadModel & {
    /**
     * Дата нужном формате
     */
    date?: Date | string
    /**
     * Транскрипция месяца
     */
    monthTranscription?: string
    /**
     * Название профиля
     */
    name?: string
    /**
     * Сумма (количество * длинна * цена за м2)
     */
    sum?: number
}
