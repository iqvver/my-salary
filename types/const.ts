//TODO: сделать даты через маски
export const MIN_RATING_AMOUNT = -100
export const DATE_FILTER_MASK = 'YYYY-MM-DD'

export enum NominationEnum {
    RAMA3 = '103001',
    STVORKA3 = '103002',
    IMPOST3 = '103003',
    RAMA5 = '105001',
    STVORKA5 = '105002',
    IMPOST5 = '105003',
    PODSTAV = '506000',
    RAMADV = '103004',
    STVORKADV = '103005',
    SHTAPIK3 = '102400',
    SHTAPIK5 = '152400',
    SHTAPIK32 = '103200',
    SOEDINITEL = '501000',
    POVOROTN = '502000',
    RASHIRITEL = '503000',
}

type NominationPriceValueType = 0.3 | 0.6

type NominationInfo = {
    title: string
    nom: number
    long: number
    price: NominationPriceValueType
}

export const nomination: { [key: string]: NominationInfo } = {
    103001: {
        title: 'Рама 3',
        nom: 103001,
        long: 6.5,
        price: 0.6,
    },
    103002: {
        title: 'Створка 3',
        nom: 103002,
        long: 6.5,
        price: 0.6,
    },
    103003: {
        title: 'Импост 3',
        nom: 103003,
        long: 6.5,
        price: 0.6,
    },
    105001: {
        title: 'Рама 5',
        nom: 105001,
        long: 6.5,
        price: 0.6,
    },
    105002: {
        title: 'Створка 5',
        nom: 105002,
        long: 6.5,
        price: 0.6,
    },
    105003: {
        title: 'Импост 5',
        nom: 105003,
        long: 6.5,
        price: 0.6,
    },
    506000: {
        title: 'Подставочник',
        nom: 506000,
        long: 6.0,
        price: 0.3,
    },
    103004: {
        title: 'Рама Дверная',
        nom: 103004,
        long: 6.3,
        price: 0.6,
    },
    103005: {
        title: 'Створка Дверная',
        nom: 103005,
        long: 6.5,
        price: 0.6,
    },
    102400: {
        title: 'Штапик 3',
        nom: 102400,
        long: 6.0,
        price: 0.3,
    },
    152400: {
        title: 'Штапик 5',
        nom: 152400,
        long: 6.0,
        price: 0.3,
    },
    103200: {
        title: 'Штапик 32',
        nom: 103200,
        long: 6.0,
        price: 0.3,
    },
    501000: {
        title: 'Соединитель',
        nom: 501000,
        long: 6.0,
        price: 0.6,
    },
    502000: {
        title: 'Поворотный',
        nom: 502000,
        long: 6.0,
        price: 0.6,
    },
    503000: {
        title: 'Расширитель',
        nom: 503000,
        long: 6.0,
        price: 0.6,
    },
} as const