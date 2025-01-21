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

export type AuthorizationUserModel = UserModel & {
    /**
     * Авторизован ли пользователь ?
     */

    isAuth: boolean
}
