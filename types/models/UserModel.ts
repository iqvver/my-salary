/**
 * Модель пользователя
 */
export type UserModel = {
    readonly id?: number
    /**
     * Имя
     */
    loginName: string
    /**
        Должность
     */
    loginJob: string
}
