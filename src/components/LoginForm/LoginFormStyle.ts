import styled from 'styled-components'
import { colors } from '../../theme/colors'
import { spacing } from '../../theme/spacing'

export const Background = styled.article`
    width: 30vw;
    background-color: ${colors.background};
    border-radius: ${spacing.nm};
    padding: ${spacing.xxl};
    display: flex;
    flex-direction: column;
    gap: ${spacing.nm};
    box-shadow: 0 0 10px -3px ${colors.palette.neutral800};
`

export const Button = styled.button`
    background-color: ${colors.palette.overlay22};
    border: 2px solid ${colors.palette.secondary200};
    outline: none;
    width: 70%;
    font-family: 'Inter', sans-serif;
    font-size: ${spacing.md};
    padding: ${spacing.xxs};
    padding-left: ${spacing.md};
    border-radius: 10px;
    margin: ${spacing.md} auto;

    &:hover {
        opacity: 0.8;
    }
`

export const Title = styled.h1`
    margin: ${spacing.xl} auto;
    font-size: ${spacing.xl};
`
