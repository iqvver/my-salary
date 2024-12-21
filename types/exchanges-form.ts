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

//TODO: Настроить
export const rules: FormRules<ExchangeModel> = {
    title: [
        {
            required: true,
            message: 'Введите имя',
            trigger: 'change',
        },
        {
            validator: (rule, value, callback, source, options) => {
                const v = value || ''
                return v.length >= 4
            },
            message: 'Введите минимум 4 символа',
            trigger: 'change',
        },
    ],
    amount: [
        {
            required: false,
            message: 'Введите должность',
            trigger: 'change',
        },
        {
            validator: (rule, value, callback, source, options) => {
                const v = value || ''
                return v >= 4
            },
            message: 'Введите минимум 4 символа',
            trigger: 'change',
        },
    ],
}
