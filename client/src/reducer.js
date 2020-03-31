import {
	ADD_SHOP_ITEM_IN_CART,
} from './constants'
import { addItemToCart } from './utils'

export default function reducer(state, { type, payload }) {
	switch (type) {
		case ADD_SHOP_ITEM_IN_CART:
			return {
				...state,
				hidden: false,
				cartItems: addItemToCart(state.cartItems, payload),
			}
		default:
			return state
	}
}
