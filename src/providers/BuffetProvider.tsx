import React, { createContext, useContext, useEffect, useState } from 'react'
import { Children } from '../types/props.type'

import { socket, useLoggedIn } from './AuthProvider'
import { Order, OrderPosition } from '../types/buffet.type'
import BuffetService from '../services/buffetService'

const OrdersContext = createContext<Order[]>([])
const ChangeOrderStatusContext = createContext(
    (id: number, statusId: number) => {}
)

export function useOrders() {
    return useContext(OrdersContext)
}

export function useChangeOrderStatus() {
    return useContext(ChangeOrderStatusContext)
}

function BuffetProvider({ children }: Children) {
    const [orders, setOrders] = useState<Order[]>([])

    function getOrders() {
        BuffetService.getOrders().then((res) => {
            if (!res?.error) setOrders(res.result)
        })
    }

    function changeOrderStatus(id: number, statusId: number) {
        BuffetService.changeOrderStatus(id, statusId).then((res) => {
            if (res?.error) alert(res.result)
        })
    }

    const loggedIn = useLoggedIn()

    useEffect(() => {
        if (loggedIn) {
            getOrders()

            socket.on('orderUpdate', (res) => {
                getOrders()
            })
        }
    }, [loggedIn])

    return (
        <OrdersContext.Provider value={orders}>
            <ChangeOrderStatusContext.Provider value={changeOrderStatus}>
                {children}
            </ChangeOrderStatusContext.Provider>
        </OrdersContext.Provider>
    )
}

export default BuffetProvider
