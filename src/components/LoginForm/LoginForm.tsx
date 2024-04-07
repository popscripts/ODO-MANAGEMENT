import { Background, Button, Title } from './LoginFormStyle'
import Input from '../Input/Input'
import { useEffect, useState } from 'react'
import { useLogIn } from '../../providers/AuthProvider'
import {
    loginValidation,
    passwordValidation
} from '../../utils/inputValidators'

type Error = {
    error: boolean
    errorText: string
}

function LoginForm() {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loginError, setLoginError] = useState<Error>({
        error: false,
        errorText: ''
    })
    const [passwordError, setPasswordError] = useState<Error>({
        error: false,
        errorText: ''
    })

    const logIn = useLogIn()

    function ValidateLogin() {
        setLoginError(loginValidation(login))
    }

    function ValidatePassword() {
        setPasswordError(passwordValidation(password))
    }

    function setError(result: string, param: string | undefined) {
        switch (param) {
            case 'username':
                setLoginError({ error: true, errorText: result })
                break
            case 'password':
                setPasswordError({ error: true, errorText: result })
                break
        }
    }

    useEffect(() => {
        isSubmitted && ValidateLogin()
    }, [login, isSubmitted])

    useEffect(() => {
        isSubmitted && ValidatePassword()
    }, [password, isSubmitted])

    function LogInPress() {
        setIsSubmitted(true)

        if (loginValidation(login).error) {
            return null
        }

        if (passwordValidation(password).error) {
            return null
        }

        logIn(login, password).then((res: any) => {
            if (res.error) {
                setError(res?.result, res?.param)
            }
        })
    }
    return (
        <Background>
            <Title>Logowanie</Title>
            <Input
                text={login}
                setText={setLogin}
                placeholder={'login'}
                errorText={loginError.errorText}
                error={loginError.error}
            />
            <Input
                text={password}
                setText={setPassword}
                placeholder={'hasło'}
                password={true}
                errorText={passwordError.errorText}
                error={passwordError.error}
            />
            <Button onClick={LogInPress}>Zaloguj</Button>
        </Background>
    )
}

export default LoginForm
