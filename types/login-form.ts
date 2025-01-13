import type { FormRules } from 'element-plus'
import type { UserModel } from '.'

export type { UserModel } from '.'

export const initialValues = {
    id: 0,
    loginName: '',
    loginJob: '',
} as UserModel

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
} as FormRules<UserModel>
