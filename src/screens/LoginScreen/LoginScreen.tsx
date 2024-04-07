import { LoginScreenContainer, Logo } from './LoginScreenStyle'
import gif from '../../assets/odo.gif'
import LoginForm from '../../components/LoginForm/LoginForm'

function LoginScreen() {
    return (
        <LoginScreenContainer>
            <div>
                <Logo src={gif} alt="odo" />
            </div>
            <LoginForm />
        </LoginScreenContainer>
    )
}

export default LoginScreen
