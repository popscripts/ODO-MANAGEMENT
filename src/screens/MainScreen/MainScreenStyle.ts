import styled from 'styled-components'
import { colors } from '../../theme/colors'

export const Background = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${colors.background};
    display: flex;
    padding: 0 50px;
`

export const Column = styled.div`
    width: 33vw;
    height: 100vh;
    overflow: auto;
    background-color: ${colors.background};
`
export const LeftDrawer = styled.div`
    position: absolute;
    left: -30vw;
    z-index: 3;

    transition: 0.5s;
`

export const LeftDrawerButton = styled.div`
    position: absolute;
    top: 0;
    left: 33vw;
    height: 100vh;
    width: 50px;
    background-color: ${colors.background};
    box-shadow: 10px 0 10px -10px ${colors.palette.neutral800};
    border-bottom-right-radius: 40px;
    border-top-right-radius: 40px;
    z-index: 2;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
`

export const RightDrawer = styled.div`
    position: absolute;
    right: -30vw;
    z-index: 3;

    transition: 0.5s;
`

export const RightDrawerButton = styled.div`
    position: absolute;
    top: 0;
    right: 33vw;
    height: 100vh;
    width: 50px;
    background-color: ${colors.background};
    box-shadow: -10px 0 10px -10px ${colors.palette.neutral800};
    border-bottom-left-radius: 40px;
    border-top-left-radius: 40px;
    z-index: 2;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
`

export const Title = styled.h1`
    width: 100%;
    text-align: center;
`

export const TitleRotated = styled.h1`
    transform: rotate(270deg);
    transform-origin: center;
`

export const TitleRotated2 = styled.h1`
    transform: rotate(90deg);
    transform-origin: center;
`
