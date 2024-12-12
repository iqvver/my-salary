import type { FormRules } from 'element-plus'

export type FormValues = {
    id: number
    loginName: string
    loginJob: string
}

export const initialValues = {
    id: 0,
    loginName: '',
    loginJob: '',
} as FormValues

export const rules = {
    loginName: [
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
    loginJob: [
        {
            required: false,
            message: 'Введите должность',
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
} as FormRules<FormValues>
