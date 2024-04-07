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
            return colors.palette.neutral500
        case 'ordered':
            return colors.palette.tertiary200
        case 'done':
            return colors.palette.primary200
        case 'pickedUp':
            return colors.palette.neutral500
        case 'inProgress':
            return colors.palette.quinary200
    }
}

function OrderBox({ order }: Props) {
    const changeStatus = useChangeOrderStatus()

    const cancelOrder = () => {
        changeStatus(order.id, 4)
    }

    const nextStatus = () => {
        changeStatus(order.id, order.status.id + 1)
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
                                <OrderText>
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
                            <IconWrapper onClick={cancelOrder}>
                                <img src={xicon} alt={'x icon'} height={20} />
                            </IconWrapper>
                            <IconWrapper onClick={nextStatus}>
                                <img
                                    src={arrow}
                                    alt={'arrow icon'}
                                    height={22}
                                />
                            </IconWrapper>
                        </IconsWrapper>
                    )}
            </Row>
        </Background>
    )
}

export default OrderBox
