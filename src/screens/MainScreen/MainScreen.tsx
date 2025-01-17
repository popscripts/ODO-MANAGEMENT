import {
    Background,
    Column,
    LeftDrawer,
    LeftDrawerButton,
    RightDrawer,
    RightDrawerButton,
    Title,
    TitleRotated,
    TitleRotated2
} from './MainScreenStyle'
import { useOrders } from '../../providers/BuffetProvider'
import OrderBox from '../../components/OrderBox/OrderBox'
import { useState } from 'react'

function MainScreen() {
    const orders = useOrders()
    const [leftPosition, setLeftPosition] = useState('-33vw')
    const [rightPosition, setRightPosition] = useState('-33vw')

    const handleLeftPosition = () => {
        setLeftPosition((prev) => (prev == '-33vw' ? '0' : '-33vw'))
    }

    const handleRightPosition = () => {
        setRightPosition((prev) => (prev == '-33vw' ? '0' : '-33vw'))
    }

    return (
        <Background>
            <LeftDrawer style={{ left: leftPosition }}>
                <LeftDrawerButton onClick={handleLeftPosition}>
                    <TitleRotated>Anulowane</TitleRotated>
                </LeftDrawerButton>
                <Column>
                    <Title>Anulowane</Title>
                    {orders
                        .filter((order) => order.status.name === 'cancelled')
                        .map((order) => (
                            <OrderBox order={order} />
                        ))}
                </Column>
            </LeftDrawer>
            <Column>
                <Title>Zamówione</Title>
                {orders
                    .filter((order) => order.status.name === 'ordered')
                    .map((order) => (
                        <OrderBox order={order} />
                    ))}
            </Column>
            <Column>
                <Title>W realizacji</Title>
                {orders
                    .filter((order) => order.status.name === 'inProgress')
                    .map((order) => (
                        <OrderBox order={order} />
                    ))}
            </Column>
            <Column>
                <Title>Gotowe</Title>
                {orders
                    .filter((order) => order.status.name === 'done')
                    .map((order) => (
                        <OrderBox order={order} />
                    ))}
            </Column>
            <RightDrawer style={{ right: rightPosition }}>
                <RightDrawerButton onClick={handleRightPosition}>
                    <TitleRotated2>Odebrane</TitleRotated2>
                </RightDrawerButton>
                <Column>
                    <Title>Odebrane</Title>
                    {orders
                        .filter((order) => order.status.name === 'pickedUp')
                        .map((order) => (
                            <OrderBox order={order} />
                        ))}
                </Column>
            </RightDrawer>
        </Background>
    )
}

export default MainScreen
