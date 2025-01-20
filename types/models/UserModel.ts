/**
 * Модель пользователя
 */
export type UserModel = {
    readonly id: string
    /**
     * Имя
     */
    loginName: string
    /**
        Должность
     */
    loginJob: string
}
