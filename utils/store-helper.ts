import type { ExchangeModel, MonthModel, MonthPreviewModel, UserModel } from '~/types'
import { DATE_MASK, MONTH_MASK, nomination } from '~/types/const'
import dayjs from 'dayjs'
import Ids from 'ids'

/**
 * Преобразование пользователя для добавления в каталог
 */
export const convertingNewUser = (payload: UserModel) => {
    const ids = new Ids()
    const newUser: UserModel = {
        id: ids.next(),
        loginName: payload.loginName,
        loginJob: payload.loginJob,
    }
    return newUser
}

/**
 * Преобразование месяца для добавления в каталог
 */
export const convertingNewMonth = (payload: MonthPreviewModel) => {
    const newMonth: MonthModel = {
        id: payload.id,
        fromUserId: payload.fromUserId,
        date: payload.date,
        title: new Date(payload.date).toLocaleString('ru', { month: 'long' }).toUpperCase(),
        transcriptionInMonth: dayjs(payload.date).format(MONTH_MASK),
    }
    return newMonth
}
/**
 * Преобразование смены для добавления в каталог
 */
export const convertingNewExchanges = (payload: ExchangeModel, newId: number) => {
    const myDate = ref(new Date(payload.fullDate))
    const nom = nomination[payload.title]
    const newExchange: ExchangeModel = {
        id: ++newId,
        fullDate: myDate.value,
        title: payload.title,
        name: nom.title,
        fromUserId: payload.fromUserId,
        date: dayjs(myDate.value).format(DATE_MASK),
        monthTranscription: myDate.value.toLocaleString('en-EN', { month: 'long' }),
        amount: payload.amount,
        sum: +(payload.amount! * nom.long * nom.price).toFixed(2),
    }
    return newExchange
}
