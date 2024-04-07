import React, { ChangeEvent, useEffect, useState } from 'react'
import { InputIconWrapper, TextInput, Wrapper, ErrorText } from './InputStyle'
import EyeIcon from '../../assets/icons/eye.svg'
import EyeClosedIcon from '../../assets/icons/closedeye.svg'

type Props = {
    text: string
    setText: Function
    placeholder: string
    error?: boolean
    errorText?: string | undefined
    password?: boolean
    autoCapitalize?: boolean
    onChange?: Function
    handleFocused?: Function
}
function Input({
    text,
    setText,
    placeholder,
    error = false,
    errorText,
    password = false,
    onChange
}: Props) {
    const [showPassword, setShowPassword] = useState<boolean>(password)

    function handlePassword() {
        setShowPassword((showPassword) => !showPassword)
    }

    useEffect(() => {
        if (onChange) onChange()
    }, [text])

    return (
        <Wrapper>
            {password && (
                <InputIconWrapper onClick={handlePassword}>
                    {showPassword ? (
                        <img
                            src={EyeClosedIcon}
                            alt={'ikona oka'}
                            height={25}
                        />
                    ) : (
                        <img src={EyeIcon} alt={'ikona oka'} height={25} />
                    )}
                </InputIconWrapper>
            )}

            <TextInput
                placeholder={placeholder}
                value={text}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setText(e.target.value)
                }
                error={error}
                type={showPassword ? 'password' : 'text'}
            />
            {errorText && <ErrorText>{errorText}</ErrorText>}
        </Wrapper>
    )
}

export default Input
