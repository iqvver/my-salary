import type { FormRules } from 'element-plus'
import type { ExchangeModel } from './models/ExchangeModel'

export type { ExchangeModel } from './models/ExchangeModel'

export const initialValues = {
    title: '',
    fromUserId: NaN,
    date: new Date(),
    fullDate: new Date(),
    amount: NaN,
} as ExchangeModel

const checkValue = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('Please input the value'))
    }
}

export const rules: FormRules<ExchangeModel> = {
    title: [
        {
            type: 'string',
            required: true,
            message: 'Выберите профиль',
            trigger: 'blur',
        },
        {
            validator: checkValue,
            message: 'Выберите профиль',
            trigger: 'change',
        },
    ],
    amount: [
        {
            type: 'number',
            required: true,
            message: 'Введите количество',
        },
    ],
    fullDate: [
        {
            type: 'date',
            required: true,
            message: 'Выберите дату',
        },
    ],
}
