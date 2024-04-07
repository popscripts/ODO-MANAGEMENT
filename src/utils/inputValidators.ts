export function loginValidation(login: string) {
    if (login.length === 0)
        return { error: true, errorText: 'Pole login nie może być puste' }
    if (login.length < 4)
        return {
            error: true,
            errorText: 'Login musi składać się z co najmniej 4 znaków'
        }
    if (login.length > 15)
        return {
            error: true,
            errorText: 'Login nie może być dłuższy niż 15 znaków'
        }
    return { error: false, errorText: '' }
}

export function passwordValidation(password: string) {
    if (password.length < 6)
        return {
            error: true,
            errorText: 'Hasło musi składać się z co najmniej 6 znaków'
        }
    return { error: false, errorText: '' }
}
