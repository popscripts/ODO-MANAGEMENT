import styled from 'styled-components'
import { colors } from '../../theme/colors'
import { spacing } from '../../theme/spacing'

export const Background = styled.div`
    width: 90%;
    margin-left: 5%;
    margin-bottom: ${spacing.md};
    background-color: ${colors.palette.neutral600};
    border-radius: ${spacing.md};
    overflow: hidden;
    gap: ${spacing.md};
    position: relative;
`

type NumberProps = {
    color: string
}

export const Number = styled.div<NumberProps>`
    background-color: ${(props) => props.color};
    border-bottom-right-radius: ${spacing.md};
    color: ${colors.text};
    font-size: ${spacing.md};
    margin: -${spacing.sm} 0 0 -${spacing.sm};
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
`

export const OrderText = styled.div`
    font-size: ${spacing.nm};
    color: ${colors.text};
    padding-left: ${spacing.sm};
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const RowSpaceBetween = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${spacing.sm};
    justify-content: space-between;
    align-items: flex-end;
`

export const IconsWrapper = styled.div`
    width: 60px;
    background-color: ${colors.palette.neutral500};
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`

export const Left = styled.div`
    width: 100%;
    flex-shrink: 5;
    padding: ${spacing.sm} 0 ${spacing.sm} ${spacing.sm};
    display: flex;
    flex-direction: column;
    gap: ${spacing.md};
    justify-content: space-between;
`
export const IconWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`

export const MediumText = styled.div`
    font-size: ${spacing.nm};
    color: ${colors.text};
    padding-right: ${spacing.sm};
`

export const SmallText = styled.div`
    font-size: ${spacing.sm};
    color: ${colors.text};
`
