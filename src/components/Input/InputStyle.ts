import styled from 'styled-components'
import { colors } from '../../theme/colors'
import { spacing } from '../../theme/spacing'

type TextInputProps = {
    placeholder: string
    value: string
    onChange: Function
    error: boolean
}

export const TextInput = styled.input<TextInputProps>`
    background-color: ${(props) =>
        props.error ? colors.palette.angry100 : colors.palette.overlay22};
    color: ${colors.text};
    font-family: 'Inter', sans-serif;
    font-size: ${spacing.md};
    padding: ${spacing.xs};
    padding-left: ${spacing.md};
    border-radius: 10px;
    border: 2px solid ${colors.palette.neutral300};
    outline: none;
    position: relative;
    width: 100%;

    &:focus {
        border: 2px solid ${colors.palette.primary200};
    }
`

export const Wrapper = styled.div`
    width: 100%;
    flex-shrink: 3;
    position: relative;
`

export const InputIconWrapper = styled.div`
    position: absolute;
    z-index: 3;
    right: ${spacing.nm};
    height: 3rem;
    width: ${spacing.nm};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ErrorText = styled.div`
    color: ${colors.palette.angry500};
    padding-left: ${spacing.md};
    padding-right: ${spacing.md};
`
