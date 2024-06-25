
import { menuItems } from "../data/db";
import { tipOptions } from "../data/option";
import { MenuItem, OrderItem } from "../types";

// Definimos los types o acciones posibles

export type OrderActions =
    { type: 'add-to-order', payload: { item: MenuItem } } |
    { type: 'delete-to-order', payload: { item: OrderItem } } |
    { type: 'reset-order' }

//definimos los argumentos o valores que tendra el state
export type OrderState = {
    data: MenuItem[],
    order: OrderItem[]
}

// estado inicial del state

export const initialState: OrderState = {
    data: menuItems,
    order: []
}

// indicarle al state de orders cuales estados y acciones va a soportar

export const ordersReducer = (
    state: OrderState = initialState,
    action: OrderActions
) => {
    if (action.type === 'add-to-order') {
        // console.log('mondongo',action.payload.item)
        const itemExists = state.order.find((item) => item.id === action.payload.item.id)
        let updatedOrder;
        if (itemExists) {
            updatedOrder = state.order.map((orderItem) =>
                orderItem.id === action.payload.item.id
                    ? { ...orderItem, quantity: orderItem.quantity + 1 }
                    : orderItem
            );
        } else {
            const newProduct: OrderItem = { ...action.payload.item, quantity: 1 };
            updatedOrder = [...state.order, newProduct];
        }

        return {
            ...state,
            order: updatedOrder
        };
    }


    if (action.type === 'delete-to-order') {

        let updatedOrder;
        if (action.payload.item.quantity > 1) {
            updatedOrder = state.order.map((orderItem) => orderItem.id === action.payload.item.id ? { ...orderItem, quantity: orderItem.quantity - 1 } : orderItem)
        }
        else {
            updatedOrder = (state.order.filter((item) => item.id !== action.payload.item.id))
        }
        return {
            ...state,
            order: updatedOrder
        }
    }

    if (action.type === 'reset-order') {

        return {
            ...state,
            order: []
        }
    }
}