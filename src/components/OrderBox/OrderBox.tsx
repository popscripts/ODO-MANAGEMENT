import { Order as OrderType, OrderStatus } from '../../types/buffet.type'
import {
    Background,
    IconsWrapper,
    IconWrapper,
    Left,
    Number,
    OrderText,
    Row,
    RowSpaceBetween,
    MediumText,
    SmallText,
    Column
} from './OrderBoxStyle'
import { colors } from '../../theme/colors'
import xicon from '../../assets/icons/xicon.svg'
import arrow from '../../assets/icons/arrow.svg'

import { useChangeOrderStatus } from '../../providers/BuffetProvider'
import LoadingIcon from '../LoadingIcon/LoadingIcon'
import { useState } from 'react'

type Props = {
    order: OrderType
}

export enum DishEnum {
    toastWithCheese = 1,
    toastWithHam = 2,
    toastWithCheeseAndHam = 3
}

export enum OrderStatusEnum {
    ordered = 4,
    inProgress = 5,
    done = 6,
    pickedUp = 7,
    cancelled = 8
}

function getDishName(id: number) {
    if (id === 1) return 'Tost z serem'
    if (id === 2) return 'Tost z szynką'
    if (id === 3) return 'Tost z serem i szynką'
}

function getStatusName(name: OrderStatus['name']) {
    switch (name) {
        case 'cancelled':
            return 'Anulowane'
        case 'ordered':
            return 'Zamówione'
        case 'done':
            return 'Gotowe do odbioru'
        case 'pickedUp':
            return 'Odebrane'
        case 'inProgress':
            return 'W realizacji'
    }
}

function getStatusColor(name: OrderStatus['name']) {
    switch (name) {
        case 'cancelled':
            return colors.palette.quaternary100
        case 'ordered':
            return colors.palette.tertiary200
        case 'done':
            return colors.palette.primary200
        case 'pickedUp':
            return colors.palette.secondary100
        case 'inProgress':
            return colors.palette.quinary200
    }
}

function OrderBox({ order }: Props) {
    const [loadX, setLoadX] = useState(false)
    const [loadArrow, setLoadArrow] = useState(false)

    const changeStatus = useChangeOrderStatus()

    const cancelOrder = () => {
        if (window.confirm('Czy na pewno chcesz anulować zamówienie?')) {
            setLoadX(true)
            changeStatus(order.id, 7).then(() =>
                setTimeout(() => {
                    setLoadX(false)
                }, 400)
            )
        }
    }

    const nextStatus = () => {
        setLoadArrow(true)
        changeStatus(order.id, order.status.id + 1).then(() =>
            setTimeout(() => {
                setLoadArrow(false)
            }, 400)
        )
    }
    return (
        <Background>
            <Row>
                <Left>
                    <Row>
                        <Number color={getStatusColor(order.status.name)}>
                            {order.id}
                        </Number>
                        <div>
                            {order.OrderPosition.map((position, id) => (
                                <OrderText key={id}>
                                    • {getDishName(position.dish.id)} x
                                    {position.amount}
                                </OrderText>
                            ))}
                        </div>
                    </Row>

                    <Column>
                        <SmallText>Uwagi: </SmallText>
                        <MediumText>{order.comment}</MediumText>
                    </Column>

                    <Column>
                        <RowSpaceBetween>
                            <SmallText>{order.orderedBy.name}</SmallText>
                            <MediumText>
                                {new Date(order.createdAt).toLocaleTimeString(
                                    'pl-PL',
                                    {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    }
                                )}
                            </MediumText>
                        </RowSpaceBetween>
                    </Column>
                </Left>
                {order.status.name !== 'cancelled' &&
                    order.status.name !== 'pickedUp' && (
                        <IconsWrapper>
                            {loadX ? (
                                <LoadingIcon />
                            ) : (
                                <IconWrapper onClick={cancelOrder}>
                                    <img
                                        src={xicon}
                                        alt={'x icon'}
                                        height={30}
                                    />
                                </IconWrapper>
                            )}

                            {loadArrow ? (
                                <LoadingIcon />
                            ) : (
                                <IconWrapper onClick={nextStatus}>
                                    <img
                                        src={arrow}
                                        alt={'arrow icon'}
                                        height={33}
                                    />
                                </IconWrapper>
                            )}
                        </IconsWrapper>
                    )}
            </Row>
        </Background>
    )
}

export default OrderBox
