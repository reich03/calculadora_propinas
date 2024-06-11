import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0);


    const addItem = (product: MenuItem) => {
        const itemExists = order.find((item) => item.id === product.id)
        if (itemExists) {
            const updateOrder = order.map((orderItem) => orderItem.id === product.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
            setOrder(updateOrder)
        } else {
            const newProduct: OrderItem = { ...product, quantity: 1 }
            setOrder([...order, newProduct])
        }
    }
    const deleteItem = (product: OrderItem) => {
        if (product.quantity > 1) {
            const updateOrder = order.map((orderItem) => orderItem.id === product.id ? { ...orderItem, quantity: orderItem.quantity - 1 } : orderItem)
            setOrder(updateOrder)
        }
        else {

            setOrder(order.filter((item) => item.id !== product.id))
        }
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }
    return {
        order,
        addItem,
        deleteItem,
        tip,
        setTip,
        placeOrder
    }
}