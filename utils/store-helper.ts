import type { ExchangeModel, MonthModel, MonthPreviewModel, UserModel, UsersModel } from '~/types'
import { DATE_MASK, MONTH_MASK, nomination } from '~/types/const'
import dayjs from 'dayjs'
import Ids from 'ids'
import type { AuthorizationUserModel } from '~/types/models/UserModel'

/**
 * Преобразование пользователя для добавления в каталог
 */
export const convertingNewUser = (payload: UserModel) => {
    const idUser = new Ids()
    const newUser: UserModel = {
        id: idUser.next(),
        loginName: payload.loginName,
        loginJob: payload.loginJob,
    }
    return newUser
}

/**
 * Преобразование месяца для добавления в каталог
 */
export const convertingNewMonth = (payload: MonthPreviewModel) => {
    const idMonth = new Ids()
    const newMonth: MonthModel = {
        id: idMonth.next(),
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
export const convertingNewExchanges = (payload: ExchangeModel, newId?: string) => {
    const myDate = ref(new Date(payload.fullDate))
    const nom = nomination[payload.title]
    const idExchanges = new Ids()
    const newExchange: ExchangeModel = {
        id: newId || idExchanges.next(),
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

export const setLSItem = (key: string, payload: UsersModel | AuthorizationUserModel) => {
    localStorage.setItem(key, JSON.stringify(payload))
}

export const getLSItem = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || '[]')
}
