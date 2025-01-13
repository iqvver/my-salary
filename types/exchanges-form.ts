import type { FormRules } from 'element-plus'
import type { ExchangeInitialModel } from '.'

export type { ExchangePayloadModel, ExchangeModel } from '.'

export const initialValues = {
    title: '',
    amount: NaN,
    fullDate: '',
} as ExchangeInitialModel

const checkValue = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('Please input the value'))
    }
}

export const rules: FormRules<ExchangeInitialModel> = {
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
