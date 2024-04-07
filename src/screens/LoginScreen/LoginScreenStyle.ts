import styled from 'styled-components'
import { colors } from '../../theme/colors'
import background from '../../assets/background.png'

export const LoginScreenContainer = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${colors.background};
    background-image: url(${background});
    background-size: cover;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Logo = styled.img`
    width: 20vw;
`
